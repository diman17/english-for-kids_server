import Router from 'express';
import CardController from '../controllers/card.controller.js';

const router = new Router();

router.get('/cards/:id', CardController.getCardsByCategoryId);

export default router;
