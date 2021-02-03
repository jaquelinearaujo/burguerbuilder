import React, { Component } from 'react';

import Aux from '../../hoc/AuxApp';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuidControls/BuildeControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurguerBuilder extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {...}
    }*/
    
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIngredienthandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCounted = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    }

    removeIngredienthandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updateCounted = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    }

    render () {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <=0
        }
        return (
            <Aux>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredienthandler}
                    ingredientRemoved={this.removeIngredienthandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurguerBuilder;