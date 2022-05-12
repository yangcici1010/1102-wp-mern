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

router.route('/register_81').get(register_81);

router.route('/register_81').post(register_81);
router.route('/login_81').post(login_81);
router.route('/updateUser_81').post(updateUser_81);

export default router;
