const { default: mongoose } = require("mongoose");

const SchemaOfBook = new mongoose.Schema({
	category: {
		type: String,
		required : [true,'Book category is required']
	},
	author: {
		type: String,
		required: true,
		unique : true
	},
	title: {
		type: String,
		required: true
	},
	createdBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
},
	{
		timestamps: true
	})

  

const Book = mongoose.model('Book', SchemaOfBook);
module.exports = Book