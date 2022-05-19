const errorHandlerMiddleware_81 = (err, req, res, next) => {
    console.log('error', err.message);
    res.status(500).json({ msg: 'there is an error', err: err });

};

export default errorHandlerMiddleware_81;