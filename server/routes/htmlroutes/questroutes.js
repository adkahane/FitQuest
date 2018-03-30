import {Router} from 'express';
import * as Questcontroller from '../controllers/questcontroller';
const router = new Router();


router.route('/quests').get(Questcontroller.getQuests);

router.route('/quest/:id').get(Questcontroller.getQuest);

router.route('/quest').post(Questcontroller.addQuest);



export default router;