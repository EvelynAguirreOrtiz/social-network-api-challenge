const router = require("express").Router();
const {
	getAllThoughts,
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
	.get(getAllThoughts)
	// CREATE a new thought
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
	// CREATE a reaction
	.post(addReaction);

// /api/thoughts/:thoughtId/reactions/reactionId
router
	.route("/:thoughtId/reactions/:reactionId")
	// DELETE a reaction by the reaction's reactionId value
	.delete(removeReaction);

module.exports = router;
