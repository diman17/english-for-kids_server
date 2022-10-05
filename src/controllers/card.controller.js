import db from '../db.js';

class CardController {
  async getCardsByCategoryId(req, res) {
    const { id } = req.params;
    const cards = await db.query(
      `SELECT * FROM cards WHERE category_id = ${id} ORDER BY card_id ASC`,
    );
    res.json(cards.rows);
  }

  async getAllCards(req, res) {
    const cards = await db.query(`SELECT * FROM cards ORDER BY card_id ASC`);
    res.json(cards.rows);
  }

  async updateCard(req, res) {
    const { id, image, audio, audioName, text, translate } = req.body;
    await db.query(
      `UPDATE cards SET image = '${image}', audio = '${audio}', audio_name = '${audioName}', text = '${text}', translate = '${translate}' WHERE card_id = ${id}`,
    );
  }

  async createCard(req, res) {
    const { image, audio, audioName, text, translate, categoryId } = req.body;
    const newCard = await db.query(
      `INSERT INTO cards (image, audio, audio_name, text, translate, category_id) VALUES ('${image}', '${audio}', '${audioName}', '${text}', '${translate}', ${categoryId})`,
    );
    res.json(newCard.command);
  }

  async deleteCard(req, res) {
    const { id } = req.body;
    const card = await db.query(`DELETE FROM cards WHERE card_id = ${id}`);
    res.json(card.command);
  }
}

export default new CardController();
