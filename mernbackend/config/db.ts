const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: 'config.env' });


const DBConnect =  () => {
  try {
      mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection to Database was Successful");
  } catch (error) { 
    console.log("Connection ERROR");
    process.exit(1);
  }
};

module.exports = DBConnect;
