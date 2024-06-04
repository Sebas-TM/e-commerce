import { useEffect, useState } from 'react';
import HeaderNav from "../components/HeaderNav";
import Footer from '../components/Footer';
import ItemCart from '../components/ItemCart';
import { Cart } from '../types/cart';
import '../styles/cartPage.css'
import { Toaster, toast } from 'sonner';

const CartPage = () => {

    const cartData = localStorage.getItem('cart');
    const [cartInfo, setCartInfo] = useState<Cart>(cartData ? JSON.parse(cartData) : { id: 1, products: [], total: 0 })

    const [cart, setCart] = useState<number>(0)
    const [total, setTotal] = useState<number>(cartInfo ? cartInfo.total : 0)

    useEffect(() => {
        if (cartInfo) {
            setCart(cartInfo.products.length)
        }
        localStorage.setItem('cart', JSON.stringify(cartInfo))
    }, [cartInfo])

    const deleteItem = (id: number) => {
        const newCart = cartInfo.products.filter(product => (product.productId !== id))

        setCartInfo({
            ...cartInfo,
            products: newCart,
        })
        toast.success('Product deleted')
    }

    useEffect(() => {
        if (!cartInfo.products.length) {
            setTotal(0)
        }
    }, [cartInfo.products])


    return (
        <>
            <Toaster position="bottom-right" />
            <HeaderNav cart={cart} />
            <section className='section-cart'>
                <div>
                    <h1 className='title-page'>Shopping Cart</h1>
                    <ul className="cart-list">
                        {cartInfo.products.length ? cartInfo.products.map((product, index) => (
                            <ItemCart key={index} product={product} deleteItem={deleteItem} setTotal={setTotal} cartInfo={cartInfo} />
                        )) : (
                            <li>
                                <h2>Cart empty</h2>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='container-total'>
                    <h1>Summary Order</h1>
                    <div className="summary-detail">
                        <h2>Total</h2>
                        <p>{`S/. ${total}`}</p>
                    </div>
                    <button className='btn btn-buy'>{`Pay (${cartInfo ? cartInfo.products.length : 0})`}</button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default CartPage;