const express = require("express");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT || 8000;
const cors = require("cors");
const mongodbClient = require("./mongoClient");
const schema = require("./schema/index.js");
const { graphqlHTTP } = require('express-graphql');


app.use(cors());

// API REST
const Product = require("./models");
app.get("/products", async (req, res) => {
  const products = await Product.find();
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category: category });
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/", (req, res) => {
  res.send("Hello express.js 👋");
});

app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(port, () => {
  console.log("🎉 Server is running on port " + port);
  mongodbClient.initialize();
});
