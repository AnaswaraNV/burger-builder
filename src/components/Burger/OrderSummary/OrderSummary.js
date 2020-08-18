import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>
    });

    return (
        <React.Fragment>
            <h3>
                Your order
            </h3>
            <p>Delicious burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to check out?</p>
        </React.Fragment>
    );
}
export default orderSummary;
