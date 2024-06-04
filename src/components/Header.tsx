import { useEffect, useState } from 'react';
import '../styles/header.css'
import ContainerHeader from "./header/ContainerHeader";

const Header = () => {

    const cartData = localStorage.getItem('cart');
    const cartInfo = cartData ? JSON.parse(cartData) : null;

    const [cart, setCart] = useState<number>(0)

    useEffect(() => {
        if (cartInfo) {
            setCart(cartInfo.products.length)
        }
    }, [cartInfo])

    return (
        <header className="header">
            <div className="container-dark">
                <ContainerHeader cart={cart} />
                <div className="container-body">
                    <h1 className="title">
                        E-Shop
                    </h1>
                    <div className="container-call-to-action">
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fuga laudantium tenetur commodi molestias illo maiores illum excepturi earum. Sapiente quod ipsam, et reiciendis praesentium rem ab inventore nemo laudantium!</h1>
                        <button className="btn btn-principal">Ver más</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
