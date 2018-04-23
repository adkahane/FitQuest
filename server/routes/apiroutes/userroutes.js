// import {Router} from 'express';
const express= require('express');
const Router = express.Router();
const UserController = require('../controllers/usercontroller');
const router = new Router();

Router.route('/user/:id').get(UserController.getUser);

Router.route('/user').post(UserController.addUser);

Router.route('/user:id').post(UserController.updateUser);

module.exports = router;

