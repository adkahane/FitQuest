import {Router} from 'express';
import * as UserController from '../controllers/usercontroller';
const router = new Router();

Router.route('/user').post(UserController.addUser);

Router.route('/user:id').post(UserController.updateUser);

 export default router;

