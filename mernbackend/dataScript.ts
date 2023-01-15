require("dotenv").config();

const productsData = require("./data/products");
const Product = require("./model/Product");
const DBConnect = require("./config/db");

DBConnect();


const importData =  async () => { 

  try {
     await  Product.deleteMany({});
     console.log(productsData)
     await Product.insertMany(productsData);

    console.log("importData Successful");
    process.exit();
    
  } catch (error) {
    console.error("Data import not successful");
    process.exit(1);
  }
};

importData();
