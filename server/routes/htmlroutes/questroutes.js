import {Router} from 'express';
import * as Questcontroller from '../controllers/questcontroller';
const router = new Router();


router.route('/').get(Questcontroller.getQuests);

router.route('/:id').get(Questcontroller.getQuest);

export default router;