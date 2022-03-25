const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    point: {
        type: Number,
        required: true,
    },
    Options: [
        {
            type: String,
        }
    ],
});

const Question = mongoose.model("Questions", QuestionSchema);
module.exports = Question;