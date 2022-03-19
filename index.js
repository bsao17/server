const express = require('express');
const app = express();
const env = require('dotenv').config();
const port = process.env.PORT || 8000;
const cors = require('cors');
const mongodbClient = require("./mongoClient");

// API REST
const Product = require("./models");
app.get('/products', async (req, res) => {
    const products = await Product.find();
    try{
        res.send(products);
    }catch(error){
        res.status(500).send(error);
    }
})

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello express.js 👋")
})

app.listen(port, () => {
    console.log("🎉 Server is running on port " + port);
    mongodbClient.initialize();
})