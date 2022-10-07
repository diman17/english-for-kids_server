import db from '../db.js';

class CategoryController {
  async getCategories(req, res) {
    const categories = await db.query(
      'SELECT * FROM categories ORDER BY category_id ASC',
    );
    res.json(categories.rows);
  }

  async updateCategory(req, res) {
    const { id, name } = req.body;
    const updatedCategory = await db.query(
      `UPDATE categories SET name = '${name}' WHERE category_id=${id} RETURNING *`,
    );
    res.json(updatedCategory.rows[0]);
  }

  async createCategory(req, res) {
    const { name } = req.body;
    const newCategory = await db.query(
      `INSERT INTO categories (name) VALUES ('${name}') RETURNING *`,
    );
    res.json(newCategory.rows[0]);
  }

  async deleteCategory(req, res) {
    const { id } = req.body;
    await db.query(`DELETE FROM cards WHERE category_id = ${id}`);
    const deletedCategory = await db.query(
      `DELETE FROM categories WHERE category_id = ${id} RETURNING *`,
    );
    res.json(deletedCategory.rows[0]);
  }
}

export default new CategoryController();
