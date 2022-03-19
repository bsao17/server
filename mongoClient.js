const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mondbClient = {
  initialize: function () {
    try {
      const client = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      client.then("successfully conected to mongoDB");
    } catch (error) {
      throw Error(error);
    }
  },
};
