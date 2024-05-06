import { useCart } from "../context/CartContext"
import CartItem from "./CartItem/CartItem"
import Button from "./Button/Button"

const CartView = () => {
  const { cart, clearCart, totalQuantity, totalPrice } = useCart()
  console.log('Carrito: ', cart)

  if (totalQuantity === 0) {
    return (
      <section >
        <h2>No tiene productos agregados</h2>
        <Button to='/'>Ver Productos</Button>
      </section>
    )
  }

  return (
    <section >
      <h2>Productos agregados</h2>
      {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
      <div >
        <Button onClick={clearCart} >Vaciar Carrito</Button>
        <Button to={'/checkout'}>checkout</Button>
        <div>
          <h4><strong>Total: </strong>$ {totalPrice}</h4>

        </div>
      </div>
    </section>
  )
}

export default CartView