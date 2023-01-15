
const getAllProducts = async () => {
    try {
        const products = await Products.find({});

        res.json(products);

    } catch (error) {
        console.error("Error");
        res.status(500).json({message: 'Server Error'}); 

    }
}


const getProductById = async () => {
    try {

        const products = await Products.findById(req.param.id);

        res.json(products);

    } catch (error) {
        console.error('Error');
        res.status(500).json({message: 'Server Error'});
        
    }
}

module.exports = {getAllProducts, getProductById};