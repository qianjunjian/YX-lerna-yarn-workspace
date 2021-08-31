var express = require("express");
var router = express.Router();

router.post("/command/hall/loginstatus", function (req, res, next) {
    res.json({
        "restdays": "111",
        "mobileNo": "11111111111",
        "investPeriod": "1",
        "loginStatus": "true",
        "ratingLvl": "5",
        "surveyUpdInform": "0",
        "expDate": "20190715",
        "surveyExpInform": "0",
        "fundid": "12778818",
        "profInvestorType": "0",
        "befRatingLvlName": "",
        "befRatingLvl": "0",
        "singleFlag": "1",
        "tradeRiskFlag": "1",
        "resurveyFlag": "1",
        "custname": "鲜峥貉"
    });
    // res.json({"loginStatus": "false"});
    // res.status(400).send('[{"message":"错误错误","code":"E0001"}]');
});

module.exports = router