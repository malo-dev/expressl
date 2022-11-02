const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const authMidller = require('../../middlewares/Authmiddleware')
const Book = require('../../models/Book')


const BookRouter = express.Router()
BookRouter.post('/',authMidller,expressAsyncHandler(async (req, res) => {
	
	const book = await Book.create(req.body);
	if (book) {
		res.status(200);
		res.json(book)
	} else {
		res.status(500)
		throw new Error('Book created failed')
	}
}))
BookRouter.get('/',expressAsyncHandler(async (req, res) => {
	const book = await Book.find({
		
	});
	if (book) {
		res.status(200);
		res.json(book)
	} else {
		res.status(500)
		throw new Error('There are no books')
	}	
}))

BookRouter.put('/:id',expressAsyncHandler(async (req, res) => {
	const book = await Book.findById(req.params.id);
	if (book) {
		const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		res.status(200);
		res.json(updatedBook)
	} else {
		res.status(500); 
		throw new Error('Update is failed')
	}
}))

BookRouter.delete('/:id',expressAsyncHandler(async (req, res) => {

	try {
		const book = await Book.findByIdAndDelete(req.params.id)
		res.status(200);
		res.send(book)
	} catch (error) {
		res.json(error)
	}
}))
module.exports = BookRouter;