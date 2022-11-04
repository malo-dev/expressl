const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt')
const SchemaOfUser = new mongoose.Schema({
	name: {
		type: String,
		required : true,
	},
	email: {
		type: String,
		required: true,
		unique : true,
	},
	password: {
		type: String,
		required: true,
	}
})
SchemaOfUser.pre('save', async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt)
});
  
SchemaOfUser.methods.isPasswordMatch = async function (pass) {
	return await bcrypt.compare(pass, this.password)
};
const User = mongoose.model('User', SchemaOfUser);
module.exports = User