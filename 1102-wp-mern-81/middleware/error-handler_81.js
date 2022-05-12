const errorHandlerMiddleware_81 = (err, req, res, netx) => {
    console.log('error', err.stack);
    res.status(500).json({ msg: 'there is an error' });

};

export default errorHandlerMiddleware_81;