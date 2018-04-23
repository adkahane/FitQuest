// import {Router} from 'express';
const express= require('express');
const Router = express.Router();
const Questcontroller = require('../../controllers/questcontroller');
const router = new Router();

router.route('/quest').get(Questcontroller.getQuests);

router.route('quests/:id').get(Questcontroller.getHighestQuest);

router.route('/quest/:id').get(Questcontroller.getQuest);

router.route('/quest').post(Questcontroller.addQuest);

module.exports = router;