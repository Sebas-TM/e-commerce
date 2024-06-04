import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProductPageSkeleton from "../components/ProductPageSkeleton";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";

import { getProduct } from "../services/product";

import { Product } from "../types/products";
import { Cart } from "../types/cart";

import '../styles/productPage.css'

import { Rating } from "@mui/material";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { Toaster, toast } from 'sonner'

const ProductPage = () => {

    const cartData = localStorage.getItem('cart');
    const cartInfo = cartData ? JSON.parse(cartData) : null;
    const [cart, setCart] = useState<Cart>(cartInfo || { id: 1, products: [], total: 0 });
    const [cartValue, setCartValue] = useState<number>(0)

    const [product, setProduct] = useState<Product>()
    const [quantity, setQuantity] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(false)
    const { productId } = useParams<{ productId: string }>()

    const fetchData = async (productId: string) => {
        setLoading(true)
        const res = await getProduct(Number(productId))
        setProduct(res)
        setLoading(false)
    }

    useEffect(() => {
        if (productId) {
            fetchData(productId)
        }
    }, [productId])

    const addItemToCart = () => {
        if (product) {
            const item = {
                productId: product.id,
                image: product.image,
                title: product.title,
                price: product.price,
                quantity: quantity,
                subtotal: product.price * quantity
            }

            // Verificamos si el producto ya está en el carrito
            const existingProductIndex = cart.products.findIndex(p => p.productId === item.productId);

            let updatedProducts;
            if (existingProductIndex >= 0) {
                // Si el producto ya está en el carrito, actualizamos la cantidad y el subtotal
                updatedProducts = cart.products.map((p, index) => {
                    if (index === existingProductIndex) {
                        return {
                            ...p,
                            quantity: item.quantity,
                            subtotal: p.price * item.quantity
                        };
                    }
                    return p;
                });
                toast.success('Product updated')

            } else {
                // Si el producto no está en el carrito, lo agregamos
                updatedProducts = [...cart.products, item];

                toast.success('Product added to cart')
            }

            // Calculamos el nuevo total
            const total = updatedProducts.reduce((acc, product) => acc + product.subtotal, 0);

            // Actualizamos el estado del carrito con los productos y el total actualizados
            setCart({
                id: 1,
                products: updatedProducts,
                total: total
            });
        }
    }

    useEffect(() => {
        setCartValue(cart.products.length)
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    return (
        <>
            <Toaster position="bottom-right" ></Toaster>
            <HeaderNav cart={cartValue} />
            {loading ?
                <ProductPageSkeleton /> :
                (
                    product && (
                        <section className="container-buy-product">
                            <div className="container-image">
                                <img className="image-product" src={product.image} alt="Imagen producto" />
                            </div>
                            <div className="container-info">
                                <p className="product-category"> {product.category}</p>
                                <h1 className="product-title">{product.title}</h1>
                                <div className="rating">
                                    <div className="product-rating-rate">
                                        <Rating name="read-only" readOnly value={product.rating.rate} precision={0.1} />
                                    </div>
                                    <div className="product-rating-count">
                                        <p>{`${product.rating.count} Reviews`}</p>
                                    </div>
                                </div>
                                <p className="product-price">{`S/. ${product.price}`}</p>
                                <p className="product-description"> {product.description}</p>
                                <div className="container-quantity">
                                    <button disabled={quantity === 1 ? true : false} className="btn btn-handle-quantity" aria-label="Add quantity" onClick={() => setQuantity(quantity - 1)}>
                                        <FaMinus />
                                    </button>
                                    <p className="quantity">{quantity}</p>
                                    <button disabled={quantity === 10 ? true : false} className="btn btn-handle-quantity" aria-label="Delete quantity" onClick={() => setQuantity(quantity + 1)}>
                                        <FaPlus />
                                    </button>
                                </div>

                                <div className="container-button">
                                    <button className="btn btn-buy " onClick={addItemToCart}>Add to cart</button>
                                    <Link to={'/cart'} className="btn btn-buy btn-secondary">Go to cart</Link>
                                </div>
                            </div>

                        </section>
                    )
                )
            }
            <Footer />
        </>
    );
}

export default ProductPage;