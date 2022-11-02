const HandleError = (err, req, res, next) => {
	const StatusError = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(StatusError)
	res.json({
		message : err.message,
	})
}
module.exports = { HandleError };