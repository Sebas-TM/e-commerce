import { Product } from "../types/products";
import { Link } from "react-router-dom";
import '../styles/productCard.css'
import { FaStar } from "react-icons/fa";

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className="card">
            <Link to={`/product/${product.id}`}>
                <div className="container-image">
                    <img className="image" src={product.image} alt="imagen-producto" />
                </div>
                <div className="container-info">
                    <div>
                        <h1 className="product-title">{product.title}</h1>
                        <div className="product-rating">
                            <p className="rate">{product.rating.rate}</p>
                            <FaStar className="icon-star" />
                        </div>
                    </div>
                    <div className="container-button">
                        <p className="product-price">{`S/. ${product.price}`}</p>
                        <button className="btn  btn-buy ">Buy
                        </button>
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default ProductCard;