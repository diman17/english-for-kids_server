import db from '../db.js';

class CategoryController {
  async getCategories(req, res) {
    const categories = await db.query('SELECT * FROM categories');
    res.json(categories.rows);
  }

  async updateCategoryName(req, res) {
    const { id, name } = req.body;
    const categories = await db.query(
      `UPDATE categories SET name = '${name}' WHERE category_id=${id}`,
    );
    res.json(categories.command);
  }
}

export default new CategoryController();
