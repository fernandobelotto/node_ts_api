import express, { Express } from 'express';
import router from './src/routes';
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json())

app.use('/books', router)
app.get('/', (req: any, res: any) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});