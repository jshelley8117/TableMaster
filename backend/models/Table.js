const mongoose = require("mongoose")

const TableSchema = new mongoose.Schema(
    {
        label:{type: String, required:true},
        state:{type: String, default:"Open"},
        seatCount:{type: Number, required:true},
        server:{type: String},
    },
);

module.exports = mongoose.model("Table", TableSchema);  