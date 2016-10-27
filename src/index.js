"use strict";

let express = require("express");
let app = express();
let routes = require("./routes");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));

app.get("/", routes.index);

app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
});
