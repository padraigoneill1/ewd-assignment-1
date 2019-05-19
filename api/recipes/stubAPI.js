import _ from 'lodash';

  const recipes = [
         { id: 1,
          ingredients:  [
            "6 skinless, boneless chicken breast halves - cut into 1/2 inch strips",
            "1 egg, beaten",
            "1 cup buttermilk",
            "1 1/2 teaspoons garlic powder",
            "1 cup all-purpose flour",
            "1 cup seasoned bread crumbs",
            "1 teaspoon salt",
            "1 teaspoon baking powder",
            "1 quart oil for frying"
          ],
          directions: [
          "Place chicken strips into a large, resealable plastic bag. In a small bowl, mix the egg, buttermilk and garlic powder. Pour mixture into bag with chicken. Seal, and refrigerate 2 to 4 hours.",
          "In another large, resealable plastic bag, mix together the flour, bread crumbs, salt and baking powder. Remove chicken from refrigerator, and drain, discarding buttermilk mixture. Place chicken in flour mixture bag. Seal, and shake to coat.",
          "Heat oil in a large, heavy skillet to 375 degrees F (190 degrees C).",
          "Carefully place coated chicken in hot oil. Fry until golden brown and juices run clear. Drain on paper towels."
          ],
          upvotes: 5, 
          description: "If you like the taste of garlic, this recipe is for you. It is easy to make, but requires time to marinate.", 
          images: [
          "img/recipes/breaded-chicken-fingers.0.jpg", 
          "img/recipes/breaded-chicken-fingers.1.jpg", 
          "img/recipes/breaded-chicken-fingers.2.jpg",
          "img/recipes/breaded-chicken-fingers.4.jpg", 
          "img/recipes/breaded-chicken-fingers.5.jpg"
          ], 
          name: "Breaded Chicken Fingers"
          },
         {
            id: 2,
            title: 'The button that is not.',
            link: 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
            username: 'notme',
            comments: [],
            upvotes: 12,
          },
          {
            id: 3,
            title: 'Google Nears $1B Investment in SpaceX',
            link: null,
            username: 'notme',
            comments: [],
            upvotes: 12,
          },
          {
            id: 4,
            title: 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
            link: 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
            username: 'psmith',
            comments: [],
            upvotes: 2,
          },
      ];


     const stubAPI = {
         getAll: () => {
            return recipes;
          },
        //  add: (t, l) => {
        //       if (!(t && l)) return false;
        //       let id = 1;
        //       const last = _.last(recipes);
        //       if (last) {
        //          id = last.id + 1;
        //       }
        //       let len = recipes.length;
        //       let newLen = recipes.push({
        //           'id': id,
        //          'title': t, 'link': l, 'username': '', 'comments': [], 'upvotes': 0});
        //        return newLen > len?id:-1;
        //       },
          upvote: (id) => {
            console.log(id)
             const index = _.findIndex(recipes,
                   (recipe) => {
                     console.log(recipe.id)
                    return recipe.id == id;
                  } );
             if (index !== -1) {
                  recipes[index].upvotes += 1;
                  return true;
                }
              return false;
           },
         getRecipe: (id) => {
            let result = null;
            const index = _.findIndex(recipes,
                   (recipe) => {
                    return recipe.id == id;
                  } );
             if (index !== -1) {
                result = recipes[index];
                    }
            return result;
            },
        //  addComment: (recipeId, c, n) => {
        //     let result = false;
        //     const recipe = stubAPI.getRecipe(recipeId);
        //     let id = 1;
        //     if (recipe) {
        //     const last = _.last(recipe.comments);
        //     if (last) {
        //        id = last.id + 1;
        //     }
        //     recipe.comments.push({'id': id,
        //              'comment': c, 'author': n, 'upvotes': 0} );
        //     result = true;
        //     }
        //   return result;
        //     },
        //  upvoteComment: (recipeId, commentId) => {
        //     let result = false;
        //     const recipe = stubAPI.getRecipe(recipeId);
        //     if (recipe) {
        //     const index = _.findIndex(recipe.comments, (c) => {
        //               return c.id == commentId;
        //             });
        //      if (index !== -1) {
        //          recipe.comments[index].upvotes += 1;
        //          result = true;
        //         }
        //       }
        //     return result;
        //   },
      };
    export default stubAPI;





// import _ from 'lodash';

//   const posts = [
//          {id: 1,
//             title: 'India - Tiger population sees 30% increase.',
//             link: 'http://www.bbc.com/news/world-asia-30896028',
//             username: 'jbloggs',
//             comments: [],
//             upvotes: 10,
//           },
//          {
//             id: 2,
//             title: 'The button that is not.',
//             link: 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
//             username: 'notme',
//             comments: [],
//             upvotes: 12,
//           },
//           {
//             id: 3,
//             title: 'Google Nears $1B Investment in SpaceX',
//             link: null,
//             username: 'notme',
//             comments: [],
//             upvotes: 12,
//           },
//           {
//             id: 4,
//             title: 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
//             link: 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
//             username: 'psmith',
//             comments: [],
//             upvotes: 2,
//           },
//       ];


//      const stubAPI = {
//          getAll: () => {
//             return posts;
//           },
//          add: (t, l) => {
//               if (!(t && l)) return false;
//               let id = 1;
//               const last = _.last(posts);
//               if (last) {
//                  id = last.id + 1;
//               }
//               let len = posts.length;
//               let newLen = posts.push({
//                   'id': id,
//                  'title': t, 'link': l, 'username': '', 'comments': [], 'upvotes': 0});
//                return newLen > len?id:-1;
//               },
//          upvote: (id) => {
//              const index = _.findIndex(posts,
//                    (post) => {
//                     return post.id == id;
//                   } );
//              if (index !== -1) {
//                   posts[index].upvotes += 1;
//                   return true;
//                 }
//               return false;
//            },
//          getPost: (id) => {
//             let result = null;
//             const index = _.findIndex(posts,
//                    (post) => {
//                     return post.id == id;
//                   } );
//              if (index !== -1) {
//                 result = posts[index];
//                     }
//             return result;
//             },
//          addComment: (postId, c, n) => {
//             let result = false;
//             const post = stubAPI.getPost(postId);
//             let id = 1;
//             if (post) {
//             const last = _.last(post.comments);
//             if (last) {
//                id = last.id + 1;
//             }
//             post.comments.push({'id': id,
//                      'comment': c, 'author': n, 'upvotes': 0} );
//             result = true;
//             }
//           return result;
//             },
//          upvoteComment: (postId, commentId) => {
//             let result = false;
//             const post = stubAPI.getPost(postId);
//             if (post) {
//             const index = _.findIndex(post.comments, (c) => {
//                       return c.id == commentId;
//                     });
//              if (index !== -1) {
//                  post.comments[index].upvotes += 1;
//                  result = true;
//                 }
//               }
//             return result;
//           },
//       };
//     export default stubAPI;