import { useEffect, useState } from "react";
import { getProducts, getProductsByCategorie } from "../services/product";
import { Product } from "../types/products";

import Header from '../components/Header';
import ProductCard from "../components/ProductCard";
import Aside from "../components/Aside";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

import '../styles/index.css'
import { IoSearchSharp } from "react-icons/io5";
import Footer from "../components/Footer";

const Index = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [productsToFilter, setProductsToFilter] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [category, setCategory] = useState<string>('')

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await getProducts()
            setProducts(res)
            setProductsToFilter(res)
        } catch (e) {
            console.error('Failed to fetch products', e);

        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const fetchDataByCategorie = async (categoryName: string) => {
        setLoading(true)
        try {
            const res = await getProductsByCategorie(categoryName)
            setProducts(res)
            setProductsToFilter(res)
        } catch (e) {
            console.error('Failed to fetch products', e);

        }
        setLoading(false)
    }

    useEffect(() => {
        if (category === '') {
            fetchData()
        } else {
            fetchDataByCategorie(category)
        }

    }, [category])

    const handleFilter = (value: string) => {
        const res = productsToFilter.filter((element) => {
            if (
                element.title.toString().toLowerCase().includes(value.toLowerCase())
            ) {
                return element
            }
        })

        setProducts(res)
    }


    return (
        <>
            <Header />
            <main className="main">
                <Aside setCategory={setCategory} />
                <section className="section-products">
                    <div className="input-group input-group-search">
                        <h2 className="category-title">{category === '' ? 'All' : category}</h2>
                        <div className="container-input">
                            <input id="search" type="text" className="input-search" placeholder="Search product" onChange={(e) => handleFilter(e.target.value)} />
                            <label className="label-search-icon" htmlFor="search">
                                <IoSearchSharp className="search-icon" />
                            </label>
                        </div>
                    </div>
                    <div className="container-products">
                        {loading ? (
                            <>
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                                <ProductCardSkeleton />
                            </>
                        ) :
                            (
                                products && products.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))
                            )
                        }
                        {products && !products.length && !loading && (
                            <h1 className="not-found">Product not found</h1>
                        )}

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Index;
