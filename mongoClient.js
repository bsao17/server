const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mongodbClient = {
  initialize: function () {
    try {
      const client = mongoose.connect(
        `mongodb+srv://bsao17:${process.env.PASSWORD}@cluster0.hxbuu.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      client.then(console.log());
    } catch (error) {
      throw Error(error);
    }
  },
};

module.exports = mongodbClient;
