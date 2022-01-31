import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
	{
    userName: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    imgUrl: { type: String, trim: true }
	},
	{ timestamps: true }
);

const Blog = mongoose.model("posts", blogSchema);

export default Blog;
