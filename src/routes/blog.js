import express from "express";
import defaultController from "../controllers/defaultController.js";
import { fetchAllBlogs, deleteBlog, updateBlogById, findBlogById, createBlogPost } from "../controllers/blog/blog.controller.js";// BLOG CONTROLLERS

const BlogRouter = express.Router();

/**
 * Home Route
 */
BlogRouter.get("/", defaultController)
 
/**
 * Delete a user(s)
 */
.delete("/delete/:id", deleteBlog)

/**
 * Get all user(s)
 */
.get("/posts", fetchAllBlogs)

/**
 * Update user(s)
 */
.put("/update/:id", updateBlogById)
/**
 * Find 1 user by id
 */
.get("/user/:id", findBlogById)

.post("/create", createBlogPost)
	

export default BlogRouter;
