const mongoose = require('mongoose')
const Database = () => {
	mongoose.connect( 'mongodb+srv://malodev:leader37700@cluster0.bsqjpzb.mongodb.net/malo-shop')
	.then(() => console.log('data base is connected successfully '))
	.catch(err => console.log(err))
}
module.exports = Database