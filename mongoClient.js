const mongoose = require("mongoose");
const schema = mongoose.Schema;
const env = require("dotenv").config();

const mondbClient = {
  initialize: function () {
    try {
      const client = mongoose.connect(
        `mongodb+srv://bsao17:${process.env.PASSWORD}@cluster0.hxbuu.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      client.then("successfully conected to mongoDB");
    } catch (error) {
      throw Error(error);
    }
  },
};

module.exports = mondbClient;
