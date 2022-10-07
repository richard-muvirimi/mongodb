const { Schema, model } = require('mongoose');

const userSchema = new Schema(
	{
		firstName: { type: String, default: "" },
		lastName: { type: String, default: "" },
		email: { type: String, default: "" }
	},
	{ timestamps: true });

module.export = model('User', userSchema);