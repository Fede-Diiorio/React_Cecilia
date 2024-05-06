import Container from "react-bootstrap/Container";
import { ItemCount } from "./ItemCount";
import { useCart } from "../context/CartContext";

export const ItemDetail = ({ id, name, img, price, stock, description }) => {
    const { addItem, getProductQuantity, cart } = useCart()

    const handleOnAdd = (quantity) => {
        const objProduct = { id, name, img, price, quantity };
        addItem(objProduct);
    }

    console.log('Detail: ', cart);
    const productQuantity = getProductQuantity(id);

    return (
        <Container className="mt-5">
            <h1>{name}</h1>
            <img src={img}
                style={{ height: 450, width: 'auto' }}
                alt={name}
            />
            <p>{description}</p>
            <div>{`Stock ${stock}`}</div>
            <div>{`Precio ${price}`}</div>
            <ItemCount stock={stock} onAdd={handleOnAdd} initial={productQuantity} />
        </Container>
    );
};

