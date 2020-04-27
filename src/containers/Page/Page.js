import React, { Component } from "react";
import classes from "./Page.module.css";
import Card from "../../containers/Card/Card";
import Cart from "../../containers/Cart/Cart";
import ButtonSize from "../../components/UI/ButttonSize/ButtonSize";
import Select from "../../components/UI/Select/Select";
import axios from "../../axios/axios-quiz";

class Page extends Component {
  state = {
    products: [],
    cart: [{
      "id": 12,
      "sku": 12064273040195392,
      "title": "Cat Tee Black T-Shirt",
      "description": "4 MSL",
      "availableSizes": ["S", "XS"],
      "style": "Black with custom print",
      "price": 10.9,
      "installments": 9,
      "currencyId": "USD",
      "currencyFormat": "$",
      "isFreeShipping": true
    },],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://simplereactshop.herokuapp.com/api/products"
      );
      const cards = [...response.data.products];

      this.setState({
        products: cards,
      });
    } catch (e) {
      console.log(e);
    }
  }
  CreateCard () {
    
  }

  render() {
    let card = null;
    card = this.state.products.map((card, id) => {
      return (
        <Card
          key={id}
          id={card.id}
          sku={card.sku}
          title={card.title}
          description={card.description}
          availableSizes={card.availableSizes}
          style={card.style}
          price={card.price}
          installments={card.installments}
          currencyId={card.currencyId}
          currencyFormat={card.currencyFormat}
          isFreeShipping={card.isFreeShipping}
        />
      );
    });
    let cart = null;
    cart = this.state.cart.map((cart, id) => {
      return (
        <Cart
          key={id}
          id={cart.id}
          sku={cart.sku}
          title={cart.title}
          description={cart.description}
          availableSizes={cart.availableSizes}
          style={cart.style}
          price={cart.price}
          installments={cart.installments}
          currencyId={cart.currencyId}
          currencyFormat={cart.currencyFormat}
          isFreeShipping={cart.isFreeShipping}
        />
      );
    });
    return (
      <div className={classes.Page}>
        <div>
          <h3>Sizes:</h3>
          <div>
            <ButtonSize>XS</ButtonSize>
            <ButtonSize>S</ButtonSize>
            <ButtonSize>M</ButtonSize>
            <ButtonSize>ML</ButtonSize>
            <ButtonSize>L</ButtonSize>
            <ButtonSize>XL</ButtonSize>
            <ButtonSize>XXL</ButtonSize>
          </div>

          <table className={classes.found_select}>
            <tr>
              <td> {this.state.products.length} Product(s) found</td>
              <td className={classes.rightcol}>
                <Select />
              </td>
            </tr>
          </table>
          <div>{card}</div>
        </div>
        {cart}
      </div>
    );
  }
}

export default Page;
