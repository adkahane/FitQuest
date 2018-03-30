import {Router} from 'express';
import * as UserController from '../controllers/usercontroller';
const router = new Router();

Router.route('/user:id').get(UserController.getUser);

export default router;

