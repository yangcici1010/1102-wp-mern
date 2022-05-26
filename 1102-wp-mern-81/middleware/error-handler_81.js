import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware_81 = (err, req, res, next) => {
    console.log('error', err.message);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'there is an error', err: err });

};

export default errorHandlerMiddleware_81;