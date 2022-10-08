import Router from 'express';
import CardController from '../controllers/card.controller.js';

const router = new Router();

router.get('/cards', CardController.getAllCards);
router.get('/cards/:id', CardController.getCardsByCategoryId);
router.get('/cards/card/:id', CardController.getCardById);
router.post('/cards/', CardController.createCard);
router.put('/cards/', CardController.updateCard);
router.delete('/cards/', CardController.deleteCard);

export default router;
