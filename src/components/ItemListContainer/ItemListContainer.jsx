import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import ItemList from "../ItemList/ItemList"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams()

  const asyncFunction = () => getProducts(categoryId)
  const { data: products, error, loading } = useAsync(asyncFunction, [categoryId])

  if (loading) {
    return <h2>Cargando...</h2>
  }

  if (error) {
    showNotification('error', 'Hubo un error')
  }

  return (
    <section className="container">
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </section>
  )
}

export default ItemListContainer