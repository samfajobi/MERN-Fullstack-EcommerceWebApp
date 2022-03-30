const dotenv = require("dotenv");
dotenv.config({ path: 'config.env' });

const productRoutes = require('./route/productRoute');

const express = require("express");

const DBConnect = require("./config/db");
const app = express();

app.use(express.json());
app.use('./api/products', productRoutes );

DBConnect();

const PORT = 5000 || process.env.PORT ;

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
