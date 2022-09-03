import Router from 'express';
import categoryController from '../controllers/category.controller.js';

const router = new Router();

router.get('/categories', categoryController.getCategories);

export default router;
