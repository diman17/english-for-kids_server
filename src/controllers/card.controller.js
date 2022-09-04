import db from '../db.js';

class CardController {
  async getCardsByCategoryId(req, res) {
    const { id } = req.params;
    const cards = await db.query(
      `SELECT * FROM cards WHERE category_id = ${id}`,
    );
    res.json(cards.rows);
  }
}

export default new CardController();
