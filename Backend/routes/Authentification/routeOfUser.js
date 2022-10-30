const express = require('express');
const User = require('../../models/User');
User
const routeOfUser = express.Router()
routeOfUser.post('/signup', async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const user = await User.create({name,email,password})
		console.log(user);
		res.send(user)
	}
	catch (error) {
		console.log(error)
	}
});

routeOfUser.post('/signin', async (req, res) => {
	try {
	res.send('sginin route')
	}
	catch (error) {
		console.log(error)
	}
});
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
routeOfUser.get('/', (req,res) => {
	res.send('get register')
	console.log('hey is gotten')
})
module.exports = routeOfUser
