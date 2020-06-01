const mongoose = require("mongoose");
const requiredPath = [true, "{PATH} is required."];

const RecipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: requiredPath,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    // The <input type="file"> defines a file-select field and a "Browse" button for file uploads.
    img: {
      type: String,
      required: requiredPath,
    },

    prepTime: {
      type: Number,
      required: requiredPath,
      minlength: [1, "{PATH} must be at least {MINLENGTH} character."],
    },
    cookTime: {
      type: Number,
      required: requiredPath,
      minlength: [1, "{PATH} must be at least {MINLENGTH} character."],
    },
    ingredients: {
      type: String,
      required: requiredPath,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    directions: {
      type: String,
      required: requiredPath,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    // rating: {
    //     type: String,
    //     required: requiredPath,
    //     minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    // },
    // review: {
    //     type: String,
    //     required: requiredPath,
    //     minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Recipe", RecipeSchema);

//TODO - add fields for the recipe form to fill out
// name/title
// picture
// prep/cooking time
// ingredients
// adding ingredients to a shopping list
// directions
// Reviews/ratings
