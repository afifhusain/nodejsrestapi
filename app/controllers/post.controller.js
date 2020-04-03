const db = require("../models");
const Post = db.posts;
const Op = db.Sequelize.Op;

// create method

exports.create = (req, res) => {
	// validate request
	if(!req.body.title) {
		res.status(400).send({
			message: "content can not be empty"
		});
		return;
	}

	// create post
	const post = {
		title: req.body.title,
		description: req.body.description,
		published: req.body.published ? req.body.published :false
	};

	Post.create(post)
		.then((data) => {
			res.send(data);
		}).catch((err) => {
			res.status(500).send({
				message:
					err.message || "some error occured white creating this post"
			});
		});
};

// retrieve all
exports.findAll = (req, res) => {

};

// find a single
exports.findOne = (req, res) => {

};

// update a post
exports.update = (req, res) => {

};

// delete single data
exports.delete = (req, res) => {

};

// delete all post
exports.deleteAll = (req, res) => {

};

//find all
exports.findAllPublished =  (req, res) => {

};