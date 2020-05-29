function errorMiddleware(error, req, res, next) {
    res.status(400).json({
        "code": "usr_409",
        "message": error
        })
}

module.exports = errorMiddleware;