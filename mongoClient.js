const mongoose = require("mongoose");
const schema = mongoose.Schema;

const mondbClient = {
  initialize: function () {
    try {
      mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      throw Error(error);
    }
  },
};
