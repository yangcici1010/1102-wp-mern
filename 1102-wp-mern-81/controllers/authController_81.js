import User_81 from "../models/User_81.js";
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';

const register_81 = async (req, res, next) => {
    //console.log('body', req.body);
    const user = await User_81.create(req.body);
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user, token, location: user.location });



    // try {
    //     console.log('body', req.body);
    //     const user = await User_81.create(req.body);
    //     const token = user.createJWT();
    //     res.status(201).json({ user, token });
    // } catch (err) {
    //     throw err;
    //res.status(500).json({ msg: 'error on registering user' });
    //     next(err);
    // }

    //res.send('register user -- cici 209410181');
};

const login_81 = async (req, res) => {
    //console.log('body', req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError('Please provide all values')
    }
    const user = await User_81.findOne({ email }).select('+password');

    if (!user) {
        throw new UnAuthenticatedError('invalid Credentials');
    }
    //console.log('login user', user);

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnAuthenticatedError('invalid Credentials');
    }

    const token = user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({
        user,
        token,
        location: user.location,
    });

    //    res.json({ msg: 'Login user -- cici 209410181' });
};

const updateUser_81 = async (req, res) => {
    res.send({ msg: 'updateUser user -- cici 209410181' });
};

export { register_81, login_81, updateUser_81 };