import express from 'express';
import stubAPI from './stubAPI';
import { log } from 'util';

const router = express.Router();

// get all recipes
router.get('/', (req, res) => {
  const recipes = stubAPI.getAll();
  res.send({recipes: recipes});
});

// Add a recipe
router.post('/', (req, res) => {
    const newRecipe = req.body;

    if (newRecipe && stubAPI.add(newRecipe.title, newRecipe.link)) {
         return res.status(201).send({message: 'Recipes Created'});
    }
    return res.status(400).send({message: 'Unable to find Recipe in request.'});
});

// upvote a recipe
router.post('/:id/upvote', (req, res) => {

  const id = req.params.id;
  console.log(id)
         if (stubAPI.upvote(id)) {
              return res.status(200).send({message: `Recipe ${id} Upvoted`});
         }
         return res.status(404).send({message: `Unable to find Recipe ${id}`});
});

// get a recipe
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const recipe = stubAPI.getRecipe(id);

       if (recipe) {
               return res.status(200).send(recipe);
              }
              return res.status(404).send({message: `Unable to find Recipe ${id}`});
});

export default router;