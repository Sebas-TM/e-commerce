import '../styles/productPageSkeleton.css'

const ProductPageSkeleton = () => {
    return (
        <section className="container-buy-product container-buy-product-skeleton">
            <div className="container-image">
                <div className="image-product"></div>
            </div>
            <div className="container-info">
                <p className="product-category"> </p>
                <h1 className="product-title"></h1>
                <div className="rating">

                </div>
                <p className="product-price"></p>
                <p className="product-description-skeleton"> </p>
                <p className="product-description-skeleton"> </p>
                <p className="product-description-skeleton"> </p>
                <p className="product-description-skeleton"> </p>

            </div>

        </section>
    );
}

export default ProductPageSkeleton;