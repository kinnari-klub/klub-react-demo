import React from 'react';
import { Fragment } from "react";
import "./Header.module.css";
import classes from './Header.module.css';
import mealsImage from '../../assets/imges/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props: any) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Daily Meals</h1>
            <HeaderCartButton onClick={props.onShow}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of food items" />
        </div>
    </Fragment>
}

export default Header;