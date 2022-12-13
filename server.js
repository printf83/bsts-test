"use strict";

const express = require("express");
const app = express();

app.use("/", express.static(__dirname + "/src"));
app.use("/", express.static(__dirname + "/dist"));

//start server
const envPORT = process.env.PORT || 3000;
const server = app.listen(envPORT, () => {
	let host = server.address().address;
	let port = server.address().port;

	console.info(`App listening at http://${host}:${port}`);
});
