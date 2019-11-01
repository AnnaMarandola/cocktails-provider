import React, { Component } from 'react';
import axios from 'axios';
import CocktailInfo from './CocktailInfo';
import './Cocktail.css';

class Cocktails extends Component {
        constructor (props) {
            super(props);
            this.state = {
                randomCocktail: null,

            };
            this.fetchRandomCocktail = this.fetchRandomCocktail.bind(this);
        }

        componentDidMount() {
            this.fetchRandomCocktail();
        }

        fetchRandomCocktail(){
            const url = 'https://www.thecocktaimportildb.com/api/json/v1/1/random.php';
            axios
                .get(url)
                .then(response => response.data)
                .then(data => data.drinks[0])
                .then(drinkInfos => {
                    this.setState({ randomCocktail: drinkInfos})
                })

        }

        render(){
            return (
                <div className="Change">
                <button id="button" className="Button" onClick={this.fetchRandomCocktail} >SHAKER</button>
                {this.state.randomCocktail && <CocktailInfo infos={this.state.randomCocktail}/>}
                </div>

            );
        }
}

export default Cocktails;