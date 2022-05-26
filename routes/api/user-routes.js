const router = require("express").Router();
const {
	getAllUser,
	// getUserById,
	createUser,
	updateUser,
	deleteUser,
} = require("../../controllers/user-controller");

// /api/users
// GET all users
// POST a new user
router.route("/").get(getAllUser).post(createUser);

// GET a single user by its _id and populated thought and friend data
// router.route("/:id/:thoughtId").get(getUserById);

// PUT to update a user by its _id
// DELETE to remove user by its _id
router.route("/:id").put(updateUser).delete(deleteUser);

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// BONUS: Remove a user's associated thoughts when deleted.
// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = router;
