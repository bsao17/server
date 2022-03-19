const mongoose = require("mongoose");
const schema = mongoose.Schema;
const env = require("dotenv").config();

const mongodbClient = {
  initialize: function () {
    try {
      const client = mongoose.connect(
        `mongodb+srv://bsao17:Enzo1974@cluster0.hxbuu.mongodb.net/marketplace?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      client.then(console.log(`🎉 database is now connected on ${process.env.DATABASE}`));
    } catch (error) {
      throw Error(error);
    }
  },
};

module.exports = mongodbClient;
