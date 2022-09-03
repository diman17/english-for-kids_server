import express from 'express';
import * as dotenv from 'dotenv';
import categoryRouter from './src/routes/category.route.js'
import cors from 'cors'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use('/api', categoryRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
