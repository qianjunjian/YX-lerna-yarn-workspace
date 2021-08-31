var express = require("express");
var router = express.Router();

router.post("/command/hall/clientLogin", function (req, res, next) {
    res.json({
        "loginStatus": "true",
        "ratingLvl": "4",
        "restdays": "-10",
        "profInvestorType": "0",
        "custname": "测试名字",
        "singleflag": "0",
        "fundid": "231231231",
        "mobileNo": "312312312",
        "expDate": "12312312312",
        "investPeriod": "2"
    });
});

module.exports = router