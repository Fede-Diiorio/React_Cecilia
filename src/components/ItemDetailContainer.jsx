import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { getProductById } from '../services/firebase/firestore/products'
import { useAsync } from '../hooks/useAsync'

const ItemDetailContainer = () => {
  const { id } = useParams()

  const asyncFunction = () => getProductById(id)
  const { data: product, error, loading } = useAsync(asyncFunction, [id])

  if (loading) {
    return <h2>Cargando...</h2>
  }

  return (
    <section className='container'>
      <ItemDetail {...product} />
    </section>
  )
}

export default ItemDetailContainer
