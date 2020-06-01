const recipeController = require("../controllers/recipe.controller");
module.exports = function (app) {
  app.post("/api/recipe/new/", recipeController.createRecipe);
  app.get("/api/recipe/", recipeController.getAllRecipes);
  app.get("/api/recipe/:id", recipeController.getOneRecipe);
  app.put("/api/recipe/:id", recipeController.updateRecipe);
  app.delete("/api/recipe/:id", recipeController.deleteRecipe);
};
