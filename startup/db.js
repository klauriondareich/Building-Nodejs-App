const mongoose = require("mongoose");
const config = require("config");

module.exports = function(){

    let db = config.get("dbUrl");

    mongoose.connect(db,
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
        console.log("connected to DB")
    }).catch((error) =>{
        console.log("error when connecting ", error)
    });

}

