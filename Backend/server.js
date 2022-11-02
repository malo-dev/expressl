const express = require('express');
const dotenv = require('dotenv')
const Database = require('./config/database');
const HandleError = require('./middlewares/Error');
const routeOfUser = require('./routes/Authentification/routeOfUser');
const BookRouter = require('./routes/book/RoutesOfBook');
BookRouter
const server = express();
dotenv.config();
Database()
server.use(express.json())

server.use('/api/users', routeOfUser)
server.use('/api/books', BookRouter)
server.use(HandleError.HandleError)
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
	console.log("Everything is up and  runing on port  http://localhost:" + PORT);
})