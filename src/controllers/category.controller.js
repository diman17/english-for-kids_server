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

  async createCategory(req, res) {
    const { name } = req.body;
    const categories = await db.query(
      `INSERT INTO categories (name) VALUES ('${name}')`,
    );
    res.json(categories.command);
  }
}

export default new CategoryController();
