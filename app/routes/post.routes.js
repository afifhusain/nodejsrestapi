module.exports = app => {
	const posts = require("../controllers/post.controller.js");

	let router = require("express").Router();

	// create a new post
	router.post("/", posts.create);

	app.use("/api/posts", router);
}