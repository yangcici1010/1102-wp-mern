import User_81 from "../models/User_81.js";
import { StatusCodes } from 'http-status-codes'

const register_81 = async (req, res, next) => {
    console.log('body', req.body);
    const user = await User_81.create(req.body);
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user, token });



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
    res.send('Login user -- cici 209410181');
};

const updateUser_81 = async (req, res) => {
    res.send('updateUser user -- cici 209410181');
};

export { register_81, login_81, updateUser_81 };