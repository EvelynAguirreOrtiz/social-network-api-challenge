const { Schema, model } = require("mongoose");
// const dateFormat = require("../utils/dateFormat");

// User
const UserSchema = new Schema({
	userName: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function (v) {
				return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
			},
			message: (props) => `${props.value} is not a valid email!`,
		},
	},
	// thoughts: [ThoughtSchema.id],
	// Array of _id values referencing the Thought model
	// friends: [UserSchema.id],
	// Array of _id values referencing the User model (self-reference)
});

const User = model("User", UserSchema);

// Schema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
// UserSchema.virtual("friendCount").get(function () {
// 	return this.friends.reduce((total, friend) => total + friends.length + 1, 0);
// });

// export the User model
module.exports = User;
