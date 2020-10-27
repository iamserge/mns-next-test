import { useState, useEffect } from "react";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import ProductTile from '../ProductTile/ProductTile';


const ProductsList = ({allProducts}) => {
    const [ pageCount, setPageCount ] = useState(1);
    const [ scrollTop, setScrollTop ] = useState(0);
    const products = allProducts.slice(0, ITEMS_PER_PAGE * pageCount);
    useEffect(()=> {
        if (scrollTop !== 0) {
            window.scrollTo(0, scrollTop);
        }  
    }, [pageCount]);
    const nextPage = () => {
        setScrollTop(window.scrollY); 
        setPageCount(pageCount + 1);
    }
    return (
        <>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product)=>{
                    return (
                        <ProductTile key={product.id} product={product} />
                    )
                })}
            </div>
            { (products.length !== allProducts.length) && (
                <div className="flex place-content-around">
                    <button className="bg-gray-300 hover:bg-gray-400 text-black text-xl p-2 ml-5 px-20 py-5" onClick={ nextPage }>Load more</button>
                </div>
            )}
            
        </>
    )
    
}

export default ProductsList;
