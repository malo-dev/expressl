const express = require('express');
const User = require('../../models/User');
const asyncHandler = require('express-async-handler');
const Token = require('../../utils/Token');
const authMidller = require('../../middlewares/Authmiddleware');
const routeOfUser = express.Router()

routeOfUser.post('/signup', asyncHandler(async (req, res,next) => {
	const { name, email, password } = req.body
	const ExistUser = await User.findOne({email : email})
	if (ExistUser) {
		throw new Error ('User Exist')
	}
	const CreatedUser = await User.create({ name, email, password })
	res.json({
			_id: CreatedUser._id,
			name: CreatedUser.name,
			email: CreatedUser.email,
			password: CreatedUser.password,
			token : Token(CreatedUser._id)
		})
} ))
//   here i make authentification
routeOfUser.post('/signin', asyncHandler(async (req, res) => {
	
	const { email, password } = req.body
	const user = await User.findOne({ email })
	if (!(user && (await user.isPasswordMatch(password))) ) {
		res.status(401)
		throw new Error('Invalid credentials')
	} else if (user && (await user.isPasswordMatch(password))) {
		res.status(200);
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			password: user.password,
			token : Token(user._id)
		})
	}
}))


routeOfUser.put('/update', async (req, res) => {
	try {
	res.send('update route')
	}
	catch (error) {
		console.log(error)
	}
});
routeOfUser.delete('/:id', async (req, res) => {
	try {
	res.send('delete route')
	}
	catch (error) {
		console.log(error)
	}
});
routeOfUser.get('/', authMidller,(req,res) => {
	res.send(req.user)
})
module.exports = routeOfUser
 