import { Fragment } from 'react';

import classes from './Header.module.css';
import medicineImage from '../../assets/Medicine.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header =(props)=>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Medicine</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={medicineImage} alt='Original and LowCost Medicine' />
            </div>
        </Fragment>
    );
}

export default Header;