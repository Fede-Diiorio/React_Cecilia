export const createProductAdaptedFromFireStore = (doc) => {
    const fields = doc.data()
    return {
        id: doc.id,
        name: fields.titulo,
        category: fields.categoria,
        price: fields.precio,
        img: fields.imagen,
        description: fields.descripcion,
        stock: fields.stock
    }
}