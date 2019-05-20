import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: {type: String, required: true},
    snippet: {type: String, required: true},
    imageUrl: {type: String, required: true},
    upvotes: {type: Number, min: 0, max: 100, default: 0},
    description: {type: String, required: true},
    ingredients: {type: Array, required: true},
    directions: {type: Array, required: true},
    images: {type: Array, required: true},
    time: {type: Array, required: true},
    id: {type: Number, required: true},
 });
export default mongoose.model('recipes', RecipeSchema);

