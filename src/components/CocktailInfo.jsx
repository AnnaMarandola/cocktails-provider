import React, { Fragment } from 'react';
import './Cocktail.css';

const CocktailInfo = ({infos}) => {
    const {strDrink, strDrinkThumb } = infos;
    return (
    <Fragment className="Provider">
        <h1>Discover cocktails from all over the word ...</h1>
    <img className="Drink" src={strDrinkThumb}  alt=" a drink"></img>
    <h2 className="drinkName">{strDrink}</h2>
    </Fragment>
    );
};

export default CocktailInfo;

