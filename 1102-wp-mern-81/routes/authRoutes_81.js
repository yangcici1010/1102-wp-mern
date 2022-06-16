import express from 'express';
const router = express.Router();
import {
    register_81,
    login_81,
    updateUser_81
} from '../controllers/authController_81.js'

router.route('/').get((req, res) => {
    res.send('hii');
});

import authenticateUser_81 from "../middleware/auth_81.js"

router.route('/register_81').post(register_81);
router.route('/login_81').post(login_81);
router.route('/updateUser_81').patch(authenticateUser_81, updateUser_81);

export default router;
