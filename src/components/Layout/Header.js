import { Fragment } from "react";

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';

import HeaderCartButton from "./HeaderCartButton";
const Header = props =>{
 return (<Fragment>
    <header className={classes.header}>
        <h1>My Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
<div className={classes['main-image']}>
    <img src={mealsImage} alt="A table of Food"></img>
</div>
 </Fragment>)
};

export default Header;