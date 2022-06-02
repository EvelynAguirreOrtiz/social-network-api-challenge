const router = require("express").Router();
const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} = require("../../controllers/user-controller");

// /api/users
router
	.route("/")
	// GET all users
	.get(getAllUsers)
	// POST new user : { "username": "lernantino", "email": "lernantino@gmail.com" }
	.post(createUser);

router
	.route("/:id")
	// GET a single user by  _id and populated thought and friend data
	.get(getUserById)
	// UPDATE a user by  _id
	.put(updateUser)
	// DELETE user by  _id
	.delete(deleteUser);

// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = router;
