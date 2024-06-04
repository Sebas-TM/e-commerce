import axios from "axios";

export const getProducts = async () => {
    try{
        const res = await axios.get('https://fakestoreapi.com/products')
        return res.data        
    }catch(e){
        console.log(e);
        
    }
}

export const getProduct = async (id: number) => {
    try{
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`)

        return res.data
    }catch(e){
        console.error('Failed to load product', e);
        
    }
}

export const getCategories = async () => {
    try{
        const res = await axios.get('https://fakestoreapi.com/products/categories')

        return res.data
    }catch(e){
        console.error('Failed to load categories', e);
        
    }
}

export const getProductsByCategorie = async (categorie: string) =>{
    try{
        const res = await axios.get(`https://fakestoreapi.com/products/category/${categorie}`)

        return res.data
    }catch(e){
        console.error('Failed to load products',e);
        
    }
}