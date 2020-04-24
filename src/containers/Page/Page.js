import React, { Component } from "react";
import classes from "./Page.module.css";
import Card from "../../containers/Card/Card";
import axios from "../../axios/axios-quiz";

// import axios from "axios";

// function getPosts(cb) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://simplereactshop.herokuapp.com/api/products");
//     xhr.addEventListener("load", ()=>{
//         const response = JSON.parse(xhr.responseText);
//         console.log(response)
//         cb(response);
//     });

//     xhr.addEventListener("eror", ()=>{
//         console.log('error');
//     });

//     xhr.send();
// }
// console.log(getPosts());

class Page extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://simplereactshop.herokuapp.com/api/products"
      );
      const cards = [];
      response.data.products.forEach((element) => {
        cards.push(element);
      });
      console.log(cards);
      this.setState({
        products: cards,
      });
      console.log(this.state.cards);
    } catch (e) {
      console.log(e);
    }
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
    return <div className={classes.Page}>{card}</div>;
  }
}

export default Page;
