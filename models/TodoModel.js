const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  Todo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ToDo", todoSchema);
