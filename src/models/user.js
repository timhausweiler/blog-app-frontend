import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		userName: { type: String, required: true, trim: true },
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true },
		password: { type: String, required: true, trim: true },
		confirmPassword: { type: String, required: true, trim: true },
		avatar:  { type: String, required: false, trim: true },
		isAdmin: false,
	},
	{ timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
