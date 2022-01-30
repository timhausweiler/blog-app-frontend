import express from "express";
import defaultController from "../controllers/defaultController.js";
import { authRequired } from "../controllers/auth/authController.js";

import { fetchAllUsers, deleteUser, updateUserByUserName, findUserById  } from "../controllers/user/user.controller.js";// USER CONTROLLERS
import { signUpUser, loginUser, logoutUser } from "../controllers/auth/authController.js";// AUTH CONTROLLERS

const Router = express.Router();

/**
 * Home Route
 */
Router.get("/", defaultController)

	/**
	 * Create/Signup User
	 */
	.post("/signup", signUpUser)

	/**
	 * Delete a user(s)
	 */
	 .delete("/delete/:id", deleteUser)

	/**
	 * Get all user(s)
	 */
	.get("/users", fetchAllUsers)

	/**
	 * Login user(s)
	 */
	.post("/login", loginUser)
	/**
	 * Get all user(s)
	 */
	.get("/logout", logoutUser)
	/**
	 * Update user(s)
	 */
	.put("/update/:userName", updateUserByUserName)
	/**
	 * Find 1 user by id
	 */
	.get("/user/:id", findUserById)

export default Router;
