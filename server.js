const express = require("express");
const fs = require("fs")
const db = require("./db/db.json");
const { dirname } = require("path");
const app = express ()

const PORT = process.env.PORT || 8080;


app.use(express.static(dirname + '/public'));
app.use(express.static('./'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./apiRoutes")(app);
require("./htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("App listening on PORT " + PORT);
});

