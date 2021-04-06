const mongoose = require("mongoose");

const userClassSchema = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, required: true },
});
//id – nom – prenom – email – numtel – pays – profession
module.exports = mongoose.model("Userclass", userClassSchema);
