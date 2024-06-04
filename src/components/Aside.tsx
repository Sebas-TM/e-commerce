import { useEffect, useState } from "react";
import { getCategories } from "../services/product";
import '../styles/aside.css'
import { IoIosArrowForward } from "react-icons/io";

interface AsideProps {
    setCategory: (categorie: string) => void;
}

const Aside = ({ setCategory }: AsideProps) => {

    const [categories, setCategories] = useState<string[]>([])
    const [categoryList, setCategoryList] = useState<boolean>(false)

    const fetchData = async () => {
        const res = await getCategories()
        setCategories(res)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <aside className="container-categories">
            <div className="title" onClick={() => setCategoryList(!categoryList)}>
                <h1>Categories</h1>
                <IoIosArrowForward className={`row-icon ${categoryList ? 'active' : ''}`} />
            </div>
            <ul className={`categories-list ${categoryList ? 'active' : ''}`}>
                <li className="categorie" onClick={() => setCategory('')}>All</li>
                {categories && categories.map((categorie, index) => (
                    <li className="categorie" onClick={() => setCategory(categorie)} key={index}>{categorie}</li>
                ))}
            </ul>
        </aside>

    );
}

export default Aside;