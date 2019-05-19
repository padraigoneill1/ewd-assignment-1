import dotenv from 'dotenv';
import express from 'express';
import contactsRouter from './api/contacts';
import recipesRouter from './api/recipes';

import bodyParser from 'body-parser';


dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));
//configure body-parser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

app.use('/api/contacts', contactsRouter);
app.use('/api/recipes', recipesRouter);

app.use(express.static('public'));





app.listen(port, () => {
  console.info(`Server running at ${port}`);
});