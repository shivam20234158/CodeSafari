import express from "express";

import {
    register,
    login,
    logout,
    // adminRegister,
    deleteProfile,
    // checkAuth,
    refreshToken,
} from "../controllers/auth.controller.js";

import userMiddleware from "../middleware/user.middleware.js";
// import adminMiddleware from "../middleware/admin.middleware.js";

const authRouter = express.Router();

// Register
authRouter.post("/register", register);

authRouter.post("/login", login);

authRouter.post("/logout", userMiddleware, logout);

authRouter.get("/check", userMiddleware, (req, res) => {

    res.status(200).json({
        user: req.user,
        message: "Valid User"
    });

});

// // New Route
authRouter.post("/refresh", refreshToken);

// authRouter.post("/admin/register", adminMiddleware, adminRegister);

authRouter.delete("/deleteProfile", userMiddleware, deleteProfile);

// authRouter.get("/check", userMiddleware, checkAuth);

export default authRouter;