import classes from './SideDrawer.module.css'
import { Link } from 'react-router-dom';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = [classes.sideDrawer];

    if(show) {
        sideDrawerClass.push(classes.show)
    }

    return (
    <div className={sideDrawerClass.join(" ")}>
        <ul className={classes.NavLink} onClick={click}>
            <li>
                    <Link to='/cart' className={classes.cartLink}>
                        <i className={`{syles.icon}} fas fa-shopping-cart`}></i>
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



    </div>

);
      
}
export default SideDrawer;


