import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });    //create an array based on ingredient key
        })
        .reduce((arr, el) => {
            return arr.concat(el)} , []); //helps to transform an array to something else

    if(transformedIngredients.length === 0) {
        transformedIngredients = <div>
            Please start adding ingredients
        </div>
    }

    console.log(transformedIngredients);
    return (
        <React.Fragment>
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom"/>
            </div>
        </React.Fragment>
    );
}

export default burger;
