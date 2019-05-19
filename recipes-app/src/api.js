import axios from 'axios';

export const upvote = recipeId => {
  return axios.post(`/api/recipes/${recipeId}/upvote`)
              .then(resp => resp.data);
};

export const getAll = () => {
   return axios('/api/recipes')
              .then(resp => resp.data);
};

export const getRecipe = recipeId => {
  return axios.get(`/api/recipes/${recipeId}`)
              .then(resp => resp.data);
};

// export const add = (newTitle, newLink) => {
//   return axios.post('/api/recipes', { title: newTitle, link: newLink })
//               .then(resp => resp.data);
// };
