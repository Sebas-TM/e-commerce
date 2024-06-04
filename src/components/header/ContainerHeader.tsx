import { Link } from "react-router-dom"
import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface ContainerHeaderProps {
    cart: number
}

const ContainerHeader = ({ cart }: ContainerHeaderProps) => {

    const [menu, setMenu] = useState<boolean>(false)
    const [fixed, setFixed] = useState<boolean>(false)

    const handleMenu = () => {
        setMenu(!menu)
    }


    window.onscroll = function () {
        const scroll = window.scrollY;
        if (scroll > 500) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    };


    return (
        <div className={`container-header ${fixed ? 'fixed-top' : ''}`}>
            <Link className="logo" to={"/"}>Logo</Link>
            <div className="container-navigation">
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to={'/'}>Shop</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Products</Link>
                        </li>
                        <li>
                            <Link to={'/about-us'}>About us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={`container-navigation-2 ${menu ? 'active' : ''}`}>
                <nav className="navigation">

                    <ul>
                        <li className="container-btn-close"><button onClick={handleMenu} aria-label="Close menu"><IoClose className="btn-close-navigation" /></button></li>
                        <li>
                            <Link to={'/'}>Shop</Link>
                        </li>
                        <li>
                            <Link to={'/'}>Products</Link>
                        </li>
                        <li>
                            <Link to={'/about-us'}>About us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container-cart">
                <Link to={'/cart'}>
                    <button aria-label="Go to cart" className="btn-cart">
                        <AiOutlineShoppingCart className="btn-cart-icon" />
                        <p className="budget">{cart}</p>
                    </button>
                </Link>
                <button name="btn-burguer" onClick={handleMenu} aria-label="Open menu">
                    <IoMenuSharp className="menu-burguer" />
                </button>
            </div>
        </div>
    )
}

export default ContainerHeader