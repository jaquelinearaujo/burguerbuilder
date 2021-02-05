import React, { Component } from 'react';

import Aux from '../../hoc/AuxApp';
import Burguer from '../../components/Burguer/Burguer';
import BuildControls from '../../components/Burguer/BuidControls/BuildeControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
    }

    updatePurchaseable (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igkey => {
            return ingredients[igkey];
        })
        .reduce((sum, element) => {
            return sum + element;
        }, 0);
        this.setState({purchaseable: sum > 0});
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
        this.updatePurchaseable(updateIngredients);
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
        this.updatePurchaseable(updateIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
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
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burguer ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredienthandler}
                    ingredientRemoved={this.removeIngredienthandler}
                    disabled={disableInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurguerBuilder;