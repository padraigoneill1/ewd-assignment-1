import _ from 'lodash';

class StubAPI {
    constructor() {
        this.recipes = [
            {
                age: 0, 
                id: 'tomato-chicken-parmesan', 
                imageUrl: 'img/recipes/tomato-chicken-parmesan.0.jpg', 
                name: 'Tomato Chicken-Parmesan', 
                snippet: 'A delicious Italian breaded chicken smothered with cheese and tomato-based pasta sauce!',
                upvotes : 10
            },
            {
                age: 1, 
                id: 'filet-mignon-with-rich-balsamic-glaze', 
                imageUrl: 'img/recipes/filet-mignon-with-rich-balsamic-glaze.0.jpg', 
                name: 'Filet Mignon with Rich Balsamic Glaze', 
                snippet: 'This is an elegant and quick romantic dinner for two. Wonderful served with steamed asparagus and baby red potatoes.',
                upvotes : 4
            },
            {
                age: 2, 
                id: 'breaded-chicken-fingers', 
                imageUrl: 'img/recipes/breaded-chicken-fingers.0.jpg', 
                name: 'Breaded Chicken Fingers', 
                snippet: 'If you like the taste of garlic, this recipe is for you. It is easy to make, but requires time to marinate',
                upvotes : 5
            }
        ] ; 
    }

    getAll() {
        return this.recipes ;
    }

    upvote(id) {
        let index = _.findIndex(this.recipes, 
            (recipe) => recipe.id === id
        );   
        if (index !== -1) {                 
            this.recipes[index].upvotes += 1 ;
            return true ;
        }
        return false ;
    }

    getRecipe(id) {
        let index = _.findIndex(this.recipes, 
            (recipe) => recipe.id === id
        )   
        let result = index !== -1 ?                  
            this.recipes[index] :
            null ;
        return result;
    }


    //Not Yet Implemented

    // add(title, link) {
    //     let id = 1 ;
    //     let last = _.last(this.recipes) ;
    //     if (last) {
    //         id = last.id + 1 ;
    //     }
    //     let len = this.recipes.length ;
    //     let newLen = this.recipes.push({ 
    //         id, title, link, 
    //         username: '', 
    //         comments: [], 
    //         upvotes: 0 }) ;
    //     return newLen > len ;
    // }

    // addComment(recipeId,c,n) {
    //     let recipe = this.getRecipe(recipeId ) ;
    //     let id = 1 ;
    //     let last = _.last(recipe.comments) ;
    //     if (last) {
    //         id = last.id + 1 ;
    //     }
    //     recipe.comments.push({ 'id': id,  
    //         comment: c , author: n, upvotes: 0 } ) ;
    // }

    // upvoteComment(recipeId,commentId) {
    //     let recipe = this.getRecipe(recipeId ) ;
    //     let index = _.findIndex(recipe.comments, 
    //         (c) => c.id === commentId
    //     );  
    //     if (index !== -1) {                 
    //         recipe.comments[index].upvotes += 1 ;
    //     }
    // }
}

export default (new StubAPI() );