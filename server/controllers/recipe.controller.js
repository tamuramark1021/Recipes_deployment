const Recipe = require("../models/recipe.model");

module.exports.createRecipe = (req, resp) => {
  Recipe.create(req.body)
    .then((recipe) => resp.json(recipe))
    .catch((err) => resp.status(400).json(err));
};

module.exports.getAllRecipes = (req, resp) => {
  Recipe.find({})
    .then((recipes) => resp.json(recipes))
    .catch((err) => resp.status(400).json(err));
};

module.exports.getOneRecipe = (req, resp) => {
  Recipe.findById(req.params.id)
    .then((recipe) => resp.json(recipe))
    .catch((err) => resp.status(400).json(err));
};

module.exports.updateRecipe = (req, resp) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  })
    .then((recipe) => resp.json(recipe))
    .catch((err) => resp.status(400).json(err));
};

module.exports.deleteRecipe = (req, resp) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then((recipe) => resp.json(recipe))
    .catch((err) => resp.status(400).json(err));
};
