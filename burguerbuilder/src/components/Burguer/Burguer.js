import React from 'react';

import classes from './Burguer.css';
import BurguerIngredient from './BurguerIngredientes/BurguerIngredient';

const burguer = (props) => {
    let transformedIngredients =  Object.keys(props.ingredients)
    .map(igkey =>{
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurguerIngredient key={igkey + i} type={igkey} />;
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        if(transformedIngredients.length == 0){
            transformedIngredients = <p>Please start adding ingredients!</p>
        }
    });
    return (
        <div className={classes.Burguer}>
            <BurguerIngredient type="bread-top" />
            {transformedIngredients}
            <BurguerIngredient type="bread-bottom" />
        </div>
    );
};

export default burguer;