const express = require('express');
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 8000;
const cors = require('cors');
const mongodbClient = require("./mongoClient");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello express.js 👋")
})

app.listen(port, () => {
    console.log("🎉 Server is running on port " + port);
    mongodbClient.initialize();
})