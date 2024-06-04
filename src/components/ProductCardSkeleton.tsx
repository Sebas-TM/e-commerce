import '../styles/productCardSkeleton.css'

const ProductCardSkeleton = () => {
    return (
        <li className="card card-skeleton">
            <div className="container-image">
                <div className="image" ></div>
            </div>
            <div className="container-info">
                <div className='subcontainer-skeleton'>
                    <h1 className="product-title"></h1>
                    <p className="product-title-2"></p>
                    <p className="product-price"></p>
                    <div className="product-rating">
                        <p className="product-rating-rate"></p>
                        <p className="product-rating-count" ></p>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProductCardSkeleton;