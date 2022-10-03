import db from '../db.js';

class CardController {
  async getCardsByCategoryId(req, res) {
    const { id } = req.params;
    const cards = await db.query(
      `SELECT * FROM cards WHERE category_id = ${id}`,
    );
    res.json(cards.rows);
  }

  async getCountCardsByCategoryId(req, res) {
    const { id } = req.params;
    const count = await db.query(
      `SELECT COUNT(card_id) FROM cards WHERE category_id = ${id}`,
    );
    res.json(count.rows[0].count);
  }
}

export default new CardController();
