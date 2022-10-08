import Router from 'express';
import categoryController from '../controllers/category.controller.js';

const router = new Router();

router.get('/categories', categoryController.getCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories', categoryController.updateCategory);
router.post('/categories', categoryController.createCategory);
router.delete('/categories', categoryController.deleteCategory);

export default router;
