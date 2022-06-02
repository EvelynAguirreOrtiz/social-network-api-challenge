const router = require("express").Router();
const {
	getAllUser,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} = require("../../controllers/user-controller");

// /api/users
// GET all users
// POST a new user : { "username": "lernantino", "email": "lernantino@gmail.com" }
router.route("/").get(getAllUser).post(createUser);

// GET a single user by  _id and populated thought and friend data
// PUT to update a user by  _id
// DELETE to remove user by  _id

// router.route("/:id/:thoughtId/:friendId").get(getUserById);

router.route("/:id").get(getUserById);
router.route("/:id").put(updateUser).delete(deleteUser);

// BONUS: Remove a user's associated thoughts when deleted.

// /api/users/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list

module.exports = router;
