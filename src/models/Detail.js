const mongoose = require("mongoose");
const Detail = mongoose.Schema({
    type: String,
    email: String,
});

module.exports = mongoose.model("detail", Detail);