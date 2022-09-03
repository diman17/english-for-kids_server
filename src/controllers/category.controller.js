import db from '../db.js';

class CategoryController {
  async getCategories(req, res) {
    const categories = await db.query('SELECT * FROM categories');
    res.json(categories.rows);
  }
}

export default new CategoryController();
