const express = require("express");
const app = express();
require("./startup/db")();
require("./routes/routes")(app);


let port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`app is running in port = ${port}`)
})