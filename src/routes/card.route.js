import Router from 'express';
import CardController from '../controllers/card.controller.js';

const router = new Router();

router.get('/cards', CardController.getAllCards);
router.get('/cards/:id', CardController.getCardsByCategoryId);
router.put('/cards/', CardController.updateCard);
router.post('/cards/', CardController.createCard);

export default router;
