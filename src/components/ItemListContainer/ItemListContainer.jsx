import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products'); // Asegúrate de que 'products' es el nombre correcto de tu colección

    getDocs(productsCollection).then((querySnapshot) => {
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      if (!categoryId) {
        setProducts(productsData);
      } else {
        const filtered = productsData.filter(
          (product) => product.categoria === categoryId
        );
        setProducts(filtered);
      }
    });
  }, [categoryId]);

  if (!products.length) return <div>Cargando...</div>;

  return (
    <section className="container">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer