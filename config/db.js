const mongoose = require("mongoose");


// Replace this with your MONGOURI.
const MONGOURI = "mongodb+srv://covidathon_test:Covidathon_1@cluster0-ivl5j.mongodb.net/test?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};




module.exports = InitiateMongoServer;