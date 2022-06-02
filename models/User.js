const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// User
const UserSchema = new Schema(
	{
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
					return /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
				},
				message: (props) => `${props.value} is not a valid email!`,
			},
		},
		// Array of _id values referencing the Thought model
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Thought",
			},
		],

		// Array of _id values referencing the User model
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// Virtual that retrieves the length of the user's friends array
UserSchema.virtual("friendCount").get(function () {
	return this.friends.length;
});

const User = model("User", UserSchema);

// export the User model
module.exports = User;
