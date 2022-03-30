const mongoose = require('mongoose')

const productSchema = new mongoose.Schema ({
    name: {
        type: String,
        //required: true
    },
    description: {
        type: String,
        required: [true, "A Product must have a name"]
    },
    price: {
        type: Number,
        //required: [true, " A Product must have a Price"]
    },
    countInStock: {
        type: Number,
        // required: true
    },
    imageUrl: {
        type: String,
        // required: true
    }
});


const Product = mongoose.model('Product', productSchema );

module.exports = productSchema;


