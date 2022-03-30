import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = ({click}) => {
    return (
        <nav className={classes.navbar}> 
            <div className={classes.nav__logo}>
             <h2>Mern Shoping Cart</h2>
            </div>

            <ul className={classes.navLinks}>
                <li>
                    <Link to='/cart' className={classes.cartLink}>
                        <i className={`{syles.icon} fas fa-shopping-cart`}></i>
                        <span>
                            Cart
                           <span className={classes.cartlogo__badge}>0</span>
                        </span>
                        
                    </Link>
                </li>

                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul> 

            <div className={classes.hamburger_menu} onClick={click}>
               <div></div>
               <div></div>
               <div></div>
            </div> 
           
        </nav> 
    )
}
export default Navbar;


