import React from 'react'; 
import classes from './ProductItems.module.css';
import { Link } from 'react-router-dom';

const ProductItems = () => {
    return (
        <div className={classes.ProductItems}>
            <img src='https://images.unsplash.com/photo-1574755393849-623942496936?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1636&q=80' alt='product img'/>

            <div className={classes.ProductInfo}>

                <p className={classes.ProductName}>Product 1</p>

                <p className={classes.Description}>A tiny VS Code extension made up of a few commands 
                that generate and insert lorem ipsum text into a text file</p>

                <p className={classes.Price}>$499.90</p>

                <Link to={`/product/${111}`} className={classes.ViewProduct}>View</Link>

            </div>

        </div>
    );
};


export default ProductItems;
