module.exports = function(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Content-Type, phone-num, identification");
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    });

    app.use("/", require("./clientLogin"));
    app.use("/", require("./loginstatus"));
    app.use("/", require("./getProperties"));
}