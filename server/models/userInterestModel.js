const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
    interestNames:[{ 
        type: String,
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    }

}, {timestamps: true});

module.exports = mongoose.model.interestSchema || mongoose.model("interests", interestSchema);