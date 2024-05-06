import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import cart from "../assets/carrito.png";

export const CartWidget = () => {
  const { totalQuantity } = useCart();

  return (
    <Link to="/cart">
      <img src={cart} alt="Cart" width={80} />
      <span>{totalQuantity}</span>
    </Link>
  );
};
