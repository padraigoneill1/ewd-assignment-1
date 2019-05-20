import dotenv from 'dotenv';
import express from 'express';
import recipesRouter from './api/recipes';
import {loadRecipes} from './recipesData';


import bodyParser from 'body-parser';
import './db'


dotenv.config();

const app = express();

const port = process.env.PORT;

// Populate DB with sample data
if (process.env.seedDb) {
  loadContacts();
  loadRecipes();
}

app.use(express.static('public'));
//configure body-parser
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());

app.use('/api/recipes', recipesRouter);

app.use(express.static('public'));





app.listen(port, () => {
  console.info(`Server running at ${port}`);
});