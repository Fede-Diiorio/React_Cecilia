import { Item } from "../Item";
import classes from './ItemList.module.css';

const ItemList = ({ products }) => {
  console.log(products);
  return (
    <div className={classes.display}>
      {
        products.map(prod => {
          return (
            <Item key={prod.id} {...prod} />
          )
        })
      }
    </div>
  )
}

export default ItemList

