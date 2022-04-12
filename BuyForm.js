import React from 'react';
import Button from './Button';

export default function Form(props) {
  const [quantity, setQuantity] = React.useState(0);

  const removeQuantity = () => {
    setQuantity(quantity - 1);
  };
  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <form>
      <p>¿Cuántos boletos para {props.movie}?</p>

      <div>
        <button
          text="-"
          power={removeQuantity}
          disabled={quantity <= 0}></button>

        <span> {quantity} </span>

        <Button
          text="+"
          power={addQuantity}
          disabled={quantity >= props.available}
        />
      </div>
    </form>
  );
}
