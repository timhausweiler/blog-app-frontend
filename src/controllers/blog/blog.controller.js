import Blog from "../../models/blog.js";
import errorHandler from "../../utilities/error.js";

export const fetchAllBlogs = async (req, res) => {
	try {
		const allBlogs = await Blog.find(
			{},
			{
				_id: 1, //true
        userName: 1,
        title: 1,
        content: 1,
        imgUrl: 1,
        timestamp:1
			}
		);

		if (allBlogs) {
			return res.json(errorHandler(false, "Fetching Blog(s)", allBlogs));
		} else {
			return res.json(errorHandler(true, "Error Fetching Blog(s)"));
		}
	} catch (error) {
		return res.json(errorHandler(true, "Error Fetching Blog(s)"));
	}
};

export const deleteBlog = (req, res) => {
	try {
		const { id } = req.params
		Blog.findByIdAndDelete(
			id,
			{ new: true },// show me the record I am acting on
			(error, deletedBlog) => {
				if (error) {
					return res.status(403).json(errorHandler(true, "Error deleting blog", {
						error: error.message
					}))
				} else {
					return res.status(201).json(errorHandler(false, "Deleting Blog", deletedBlog))
				}
		});

	} catch (error) {
		return res.json(errorHandler(true, "Error deleting blog"))
	}
};

export const updateBlogById = (req, res) => {
  try {
		Blog.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true }, 
			(error, updatedBlog) => {
				if (updatedBlog) {
					res.json(errorHandler(false, "Updated blog", updatedBlog))
				} else {
					return res.json(errorHandler(true, "Error Updating Blog", {
						error
					}))
				}
			}
		)
	} 
	catch (error) {
		return res.json(errorHandler(true, "Error updating blog"))
	}
};

export const findBlogById = (req, res) => {
	try {
		Blog.findById(req.params.id, (error, foundBlog) => {
			if (foundBlog) {
				const { userName, title, content, imgUrl, createdAt } = foundBlog ; // createAt or timestamp?
				return res.json(errorHandler(false, "Blog found", {
					user: {
            userName,
            title,
            content,
            imgUrl,
						created_at: createdAt
					}
				}))
			} else {
				return res.json(errorHandler(true, "Trouble finding blog"))
			}
		})
	} 
	catch (error) {
		res.json(errorHandler(true, "Trouble finding blog"))
	}
}

export const createBlogPost = async (req, res) => {
	try {
	  const newPost = new Blog({
		userName: req.body.userName,
		title: req.body.title,
		content: req.body.content,
		imgUrl: req.body.imgUrl
	  });
  
	  if (newPost) {  
		res.json(
		  errorHandler(
			false,
			`${newPost.userName.toUpperCase()} has created a blog post!`,
			{ post: newPost._id }
		  )
		);
		await newPost.save();  
	  } else {
		return res.json(errorHandler(true, 'Error creating blog post'));
	  }
	} catch (error) {
	  console.error(error.message);
	  return res.json(errorHandler(true, 'Error creating blog post'));
	}
  };