import express from 'express';
import * as dotenv from 'dotenv';
import categoryRouter from './src/routes/category.route.js'
import cardRouter from './src/routes/card.route.js'
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use('/api', [categoryRouter, cardRouter])

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
