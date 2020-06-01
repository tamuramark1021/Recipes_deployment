const db_name = "recipes_galore";
const express = require("express");
const cors = require("cors");
const app = express();

require("./config/mongoose.config")(db_name);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./config/mongoose.config");
require("./routes/recipe.routes")(app);
app.listen(9001, () => console.log("Listening on port 9001"));
