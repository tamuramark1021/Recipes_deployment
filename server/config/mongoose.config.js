const mongoose = require("mongoose");

module.exports = (db_name) => {
  mongoose
    .connect(`mongodb://localhost/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Database connection successful to ${db_name}`))
    .catch((err) => console.log("There was an error", err));
};
