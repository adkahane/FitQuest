import {Router} from 'express';
import * as UserController from '../controllers/usercontroller';
const router = new Router();

Router.route('/:id').get(UserController.getUser);

export default router;

