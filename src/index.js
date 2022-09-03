import express from 'express';
import * as dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/categories', async (req, res) => {
  const categories = await db.query('SELECT * FROM categories');
  res.json(categories.rows);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
