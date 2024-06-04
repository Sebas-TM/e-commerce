export interface ProductCart {
    productId: number,
    image: string,
    title: string,
    price: number,
    quantity: number
    subtotal: number
}

export interface Cart {
    id: number,
    products: ProductCart[]
    total: number
}