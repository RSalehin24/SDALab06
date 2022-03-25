const express = require("express");
const router = express.Router();

const {
    getQuestion,
    postQuestion
} = require("../controllers/question.controller")

router.get("/questions/:id", getQuestion);
router.post("/questions", postQuestion);


module.exports = router;