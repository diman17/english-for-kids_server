import db from '../db.js';

class CardController {
  async getCardsByCategoryId(req, res) {
    const { id } = req.params;
    const cards = await db.query(
      `SELECT * FROM cards WHERE category_id = ${id}`,
    );
    res.json(cards.rows);
  }

  async getAllCards(req, res) {
    const cards = await db.query(`SELECT * FROM cards`);
    res.json(cards.rows);
  }

  async updateCard(req, res) {
    const { id, image, audio, audioName, text, translate } = req.body;
    await db.query(
      `UPDATE cards SET image = '${image}', audio = '${audio}', audio_name = '${audioName}', text = '${text}', translate = '${translate}' WHERE card_id = ${id}`,
    );
  }
}

export default new CardController();
