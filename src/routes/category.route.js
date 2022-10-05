import Router from 'express';
import categoryController from '../controllers/category.controller.js';

const router = new Router();

router.get('/categories', categoryController.getCategories);
router.post('/categories', categoryController.createCategory);
router.put('/categories', categoryController.updateCategoryName);

export default router;
