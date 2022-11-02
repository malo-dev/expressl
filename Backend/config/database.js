const mongoose = require('mongoose')
const Database = () => {
	mongoose.connect( process.env.DATABASE_URL)
	.then(() => console.log('database is connected successfully '))
	.catch(err => console.log(err))
}
module.exports = Database