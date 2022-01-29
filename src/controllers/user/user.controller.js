import User from "../../models/user.js";
import errorHandler from "../../utilities/error.js";

export const fetchAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find(
			{},
			{
				_id: 1, //true
				userName: 1,
				firstName: 1,
				lastName: 1,
				email: 1,
				password: 1
				// password: 0, // falsey
			}
		);

		if (allUsers) {
			return res.json(errorHandler(false, "Fetching User(s)", allUsers));
		} else {
			return res.json(errorHandler(true, "Error Fetching User(s)"));
		}
	} catch (error) {
		return res.json(errorHandler(true, "Error Fetching User(s)"));
	}
};

export const deleteUser = (req, res) => {
	try {
		const { id } = req.params
		User.findByIdAndDelete(
			id,
			{ new: true },// show me the record I am acting on
			(error, deletedUser) => {
				if (error) {
					return res.statu(403).json(errorHandler(true, "Error deleting user", {
						error: error.message
					}))
				} else {
					return res.status(201).json(errorHandler(false, "Deleting User", deletedUser))
				}
		});

	} catch (error) {
		return res.json(errorHandler(true, "Error deleting user"))
	}
};

export const updateUserByUserName = (req, res) => {
  try {
		User.findOneAndUpdate(
			{ userName: req.params.userName },
			req.body,
			{ new: true }, 
			(error, updatedUser) => {
				if (updatedUser) {
					res.json(errorHandler(false, "Updated User", updatedUser))
				} else {
					return res.json(errorHandler(true, "Error Updating User", {
						error
					}))
				}
			}
		)
	} 
	catch (error) {
		return res.json(errorHandler(true, "Error updating user"))
	}
};

export const findUserById = (req, res) => {
	try {
		User.findById(req.params.id, (error, foundUser) => {
			if (foundUser) {
				const { userName, firstName, lastName, email, password, createdAt, avatar } = foundUser;
				return res.json(errorHandler(false, "User found", {
					user: {
            userName,
            firstName,
            lastName,
            email,
            password,
            avatar, 
						member_since: createdAt
					}
				}))
			} else {
				return res.json(errorHandler(true, "Trouble finding user"))
			}
		})
	} 
	catch (error) {
		res.json(errorHandler(true, "Trouble finding user"))
	}
}