require("dotenv").config();
const Question = require("../models/Question.model");


const getQuestion = (req, res) => {
    const id = req.params.id;
    Question.findById({_id: id})
    .then((question)=>{
        res.send(question);
    })
    .catch((err)=>{
        res.send(err);
    })
}

const postQuestion = (req, res) => {
    const {
        description,
        tag, 
        point,
        option,
    } = req.body;

    const newQuestion = new Question({
        description: description,
        tag: tag,
        point: point,
        option: option,
    })

    newQuestion.save((err, data)=>{
        if(err){
            res.send(err);
        } else {
            res.send(data);
        }
    })
}

module.exports={
    getQuestion,
    postQuestion,
}
