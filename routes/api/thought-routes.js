const router = require("express").Router();
const {
	getAllThought,
	getThoughtById,
	createThought,
	updateThought,
	removeThought,
	addReaction,
	removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router
	.route("/")
	// GET all thoughts
	.get(getAllThought)
	// POST a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
	// example data: { "thoughtText": "Here's a cool thought...", "username": "lernantino",  "userId": "5edff358a0fcb779aa7b118b" }
	.post(createThought);

// /api/thoughts/:id
router
	.route("/:id")
	// GET a single thought by its _id
	.get(getThoughtById)
	// UPDATE a thought by its _id
	.put(updateThought)
	// DELETE to remove a thought by its _id
	.delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router
	.route("/:thoughtId/reactions")
	// POST to create a reaction stored in a single thought's reactions array field
	.post(addReaction)
	// DELETE to pull and remove a reaction by the reaction's reactionId value
	.delete(removeReaction);

module.exports = router;
