import Footer from "../components/Footer";
import HeaderNav from "../components/HeaderNav";
import { Cart } from "../types/cart";
import '../styles/aboutUs.css'

const AboutUs = () => {

    const cartData = localStorage.getItem('cart');
    const cartInfo: Cart = cartData ? JSON.parse(cartData) : { id: 1, products: [], total: 0 }

    const cart: number = cartInfo ? cartInfo.products.length : 0

    return (
        <>
            <HeaderNav cart={cart} />
            <section className="about-us">
                <img src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Macbook con taza de café" />
                <h1 className="title">About us</h1>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aut illum sunt quod distinctio, rem optio accusamus? Cumque, nesciunt? Suscipit ipsum illum numquam reprehenderit animi. Illum, sunt. Praesentium, soluta. Laboriosam!</p>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aut illum sunt quod distinctio, rem optio accusamus? Cumque, nesciunt? Suscipit ipsum illum numquam reprehenderit animi. Illum, sunt. Praesentium, soluta. Laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aut illum sunt quod distinctio, rem optio accusamus? Cumque, nesciunt? Suscipit ipsum illum numquam reprehenderit animi. Illum, sunt. Praesentium, soluta. Laboriosam!</p>
                <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aut illum sunt quod distinctio, rem optio accusamus? Cumque, nesciunt? Suscipit ipsum illum numquam reprehenderit animi. Illum, sunt. Praesentium, soluta. Laboriosam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aut illum sunt quod distinctio, rem optio accusamus? Cumque, nesciunt? Suscipit ipsum illum numquam reprehenderit animi. Illum, sunt. Praesentium, soluta. Laboriosam!</p>

            </section>
            <Footer />
        </>
    );
}

export default AboutUs;