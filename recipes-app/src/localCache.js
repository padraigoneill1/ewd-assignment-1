class LocalCache {
    constructor() {
        this.recipe = null 
    }

    setRecipe(recipe) {
        this.recipe = recipe 
    }

    getRecipe() {
        return this.recipe
    }

}
export default (new LocalCache() );