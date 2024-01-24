import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searckController';

const router = Router();



router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/seack', SearchController.search);

export default router;