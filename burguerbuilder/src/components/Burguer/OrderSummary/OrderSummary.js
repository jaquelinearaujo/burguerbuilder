import React from 'react';

import Aux from '../../../hoc/AuxApp';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map(igkey => {
        return (
            <li key={igkey}>
                <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}
            </li>);
    });
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicius burguer with following ingredients:</p>

            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    );
};

export default orderSummary;