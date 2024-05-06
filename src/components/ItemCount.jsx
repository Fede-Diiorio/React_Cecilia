import { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

export const ItemCount = ({ initial = 1, onAdd, stock }) => {
  const [quantity, setQuantity] = useState(initial);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <div className="d-flex">
      <div>
        <button ><FaMinus onClick={decrement} /></button>

        <p>{quantity}</p>
        <button ><FaPlus onClick={increment} /></button>

      </div>
      <button onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
    </div>
  );
};
