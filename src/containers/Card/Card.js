import React from "react";
import classes from "./Card.module.css";
import Button from "../../components/UI/Button/Button";

export default (props) => (
  <div className={classes.Card}>
    <div className={classes.img_div}>
      {props.isFreeShipping ? (
        <p className={classes.yes}>Free shipping</p>
      ) : (
        <p className={classes.none}> 2</p>
      )}
      <a href={`/images/products/${props.sku}_1.jpg`}>
        <img
          className={classes.img}
          src={`/images/products/${props.sku}_2.jpg`}
          alt={props.style}
        />
      </a>
    </div>
    <h2>{props.title}</h2>
    <hr />
    <div>
      <h3>
        {props.currencyFormat}
        {props.price}{" "}
      </h3>
      <h3>
        or {props.installments} x {props.currencyFormat}
        {(props.price / props.installments).toFixed(2)}
      </h3>
    </div>
    <Button>Add to cart</Button>
  </div>
);
