const { default: mongoose } = require("mongoose");

mongoose
const SchemaOfUser = new mongoose.Schema({
	name: {
		type: String,
		required : true
	},
	email: {
		type: String,
		required: true,
		unique : true
	},
	password: {
		type: String,
		required: true
	}
})
const User = mongoose.model('User', SchemaOfUser);
module.exports = User