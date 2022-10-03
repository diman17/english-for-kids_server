import Router from 'express';
import CardController from '../controllers/card.controller.js';

const router = new Router();

router.get('/cards/:id', CardController.getCardsByCategoryId);
router.get('/cards/:id/count', CardController.getCountCardsByCategoryId);

export default router;
