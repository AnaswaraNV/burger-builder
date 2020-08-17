import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css'

const Burger = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"></BurgerIngredient>
                <BurgerIngredient type="cheese"></BurgerIngredient>
                <BurgerIngredient type="salad"></BurgerIngredient>
                <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </div>
        </React.Fragment>
    );
}

export default Burger;
