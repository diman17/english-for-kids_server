import express from 'express';
import * as dotenv from 'dotenv';
import categoryRouter from './src/routes/category.route.js'
import cardRouter from './src/routes/card.route.js'
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use('/api', [categoryRouter, cardRouter])

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
