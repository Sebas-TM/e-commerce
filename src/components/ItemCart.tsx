import { useEffect, useState } from "react";
import { ProductCart } from "../types/cart";


import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import '../styles/itemCart.css'
import { IoClose } from "react-icons/io5";
import { Cart } from "../types/cart";

interface ItemCartProps {
    product: ProductCart;
    deleteItem: (id: number) => void
    setTotal: (value: number) => void
    cartInfo: Cart
}

const ItemCart = ({ product, deleteItem, setTotal, cartInfo }: ItemCartProps) => {

    const [quantity, setQuantity] = useState<number>(product.quantity)
    const [subtotal, setSubtotal] = useState<number>(product.subtotal)
    const [cart, setCart] = useState<Cart>(cartInfo || { id: 1, products: [], total: 0 })


    const updateCart = (newQuantity: number, id: number) => {
        if (cart) {
            const existingProductIndex = cart.products.findIndex(p => p.productId === id)

            let updatedProducts
            if (existingProductIndex >= 0) {
                updatedProducts = cart.products.map((p, index) => {
                    if (index === existingProductIndex) {
                        return {
                            ...p,
                            quantity: newQuantity,
                            subtotal: p.price * newQuantity
                        }
                    }
                    return p
                })
            } else {
                updatedProducts = [...cart.products, { ...product, quantity: newQuantity, subtotal: product.price * newQuantity }];
            }

            const total = updatedProducts.reduce((acc, product) => acc + product.subtotal, 0)

            setTotal(parseFloat(total.toFixed(2)))

            setCart({
                id: 1,
                products: updatedProducts,
                total: parseFloat(total.toFixed(2))
            })
        }
    }


    useEffect(() => {
        if (product.price && quantity > 0) {
            const num = product.price * quantity
            setSubtotal(parseFloat(num.toFixed(2)))
        }
    }, [quantity, product.price])

    useEffect(() => {
        updateCart(quantity, product.productId)
    }, [quantity, product.productId])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <li className="item">
            <button aria-label="Close menu" onClick={() => deleteItem(product.productId)}><IoClose className="btn-delete" /></button>
            <div className="product">
                <div className="container-image">
                    <img loading="lazy" src={product.image} alt="" />
                </div>
                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{`S/. ${product.price.toFixed(2)}`}</p>
                </div>
            </div>
            <div className="container-actions">
                <div className="quantity">
                    <p className="text">Quantity:</p>
                    <div className="container-quantity">
                        <button disabled={quantity === 1 ? true : false} className="btn btn-handle-quantity" aria-label="Add quantity" onClick={() => {
                            setQuantity(quantity - 1)
                        }}>
                            <FaMinus />
                        </button>
                        <p className="quantity">{quantity}</p>
                        <button disabled={quantity === 10 ? true : false} className="btn btn-handle-quantity" aria-label="Delete quantity" onClick={() => setQuantity(quantity + 1)}>
                            <FaPlus />
                        </button>
                    </div>
                </div>
                <div className="subtotal">
                    <p className="text">Subtotal:</p>
                    <p className="ammount">{`S/. ${subtotal}`}</p>
                </div>
            </div>
        </li>);
}

export default ItemCart;