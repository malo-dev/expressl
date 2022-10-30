const express = require('express');
const Database = require('./config/database');
const User = require('./models/User');
const routeOfUser = require('./routes/Authentification/routeOfUser');
const server = express();
Database()
server.use(express.json())
server.use('/api/users',routeOfUser)
const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
	console.log("everything is up and  runing on port  http://localhost:" + PORT);
})