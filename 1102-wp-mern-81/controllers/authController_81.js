import User_81 from "../models/User_81.js";


const register_81 = async (req, res) => {
    console.log('body', req.body);
    const user = await User_81.create(req.body);
    res.status(201).json({ user });
    //res.send('register user -- cici 209410181');
};

const login_81 = async (req, res) => {
    res.send('Login user -- cici 209410181');
};

const updateUser_81 = async (req, res) => {
    res.send('updateUser user -- cici 209410181');
};

export { register_81, login_81, updateUser_81 };