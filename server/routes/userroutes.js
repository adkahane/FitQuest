import {Router} from 'express';
import * as UserController from '../controllers/usercontroller';
const router = new Router();

Router.route('/user:id').get(UserController.getUser);

Router.route('/user').post(UserController.addUser);
 export default router;

