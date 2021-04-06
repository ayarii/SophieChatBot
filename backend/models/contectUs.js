const mongoose = require("mongoose");

const contectUsSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});
//id – nom – prenom – email – numtel – pays – profession
module.exports = mongoose.model("contectus", contectUsSchema);
