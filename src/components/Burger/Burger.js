import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css'

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }); //create an array based on ingredient key

    return (
        <React.Fragment>
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"></BurgerIngredient>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </div>
        </React.Fragment>
    );
}

export default burger;
