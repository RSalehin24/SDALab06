const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Question Service has successfully been deployed in Heroku')
});

module.exports = router;