import classes from './HomeScreen.module.css'
import Product from '../../components/ProductItems/ProductItems'

const HomeScreen = () => {
    return (
        <div className={classes.HomeScreen}>
            <h2 className={classes.HomeScreenTitle}>Latest Products</h2>

            <div className={classes.HomeScreenProduct}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />

            </div>
        </div>
    )
}

export default HomeScreen;
