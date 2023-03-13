const auth = require("../controllers/auth");
const bodyParser = require("body-parser");


module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : false}));
    app.use("/api/v1/auth/", auth);
}