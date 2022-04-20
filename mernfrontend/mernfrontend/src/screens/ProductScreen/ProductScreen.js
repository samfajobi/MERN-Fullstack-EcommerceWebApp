import classes from './ProductScreen.module.css'


 const ProductScreen = () => {
    return (
        <div className={classes.ProductScreen}>
           <div className={classes.ProductScreenLeft}>
               <div className={classes.leftImage}>
                   <img src="https://images.unsplash.com/photo-1574755393849-623942496 36?ixid=MnwxMjA3f
                   DB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1636&q=80' alt='product img'/>
                   " alt="product img"/>
                </div>

                <div className={classes.leftInfo}>
                    <p className={classes.ProductName}>Product 1</p>
                    <p>A tiny VS Code extension made up of a few commands 
                        that generate and insert lorem ipsum text into a text file</p>
                    <p>Price: $499.90</p> 
                </div>
            </div>

           <div className={classes.ProductScreenRight}>
               <div className={classes.rightInfo}>
                   <p>
                       Price: <span>$499.90</span>
                   </p>
                   <p>
                       Status: <span>In Stock</span>
                   </p>
                   <p>
                       Qty: 
                       <select>
                           <option value="1" >1</option>
                           <option value="2" >2</option>
                           <option value="3" >3</option>
                           <option value="4" >4</option>
                           <option value="5" >5</option>
                       </select>
                   </p>

                   <p>
                       <button type="button" >Add To Cart</button>
                   </p>

               </div>
           </div>
        </div>
    );
};

export default ProductScreen;
