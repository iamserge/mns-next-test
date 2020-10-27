import Link from 'next/link'
import Price from "../Price/Price";
import ProductImage from "../ProductImage/ProductImage";


const ProductTile = ({product}) => {
    const { 
        id,
        name,
        image_key,
        price,
        offer_ids
     } = product;
     
    return (
        <Link href={`/product/${id}`}>
            <div className="mb-10 cursor-pointer">
                <div className="relative">
                    <ProductImage image_key={image_key} name={name} offers={offer_ids} />
                    <div className="absolute"></div>
                </div>
                <div className="flex justify-between text-xl mt-2">
                    <h3>{name}</h3>
                    <Price price={price} />
                </div>
            </div>
        </Link>
    )
    
}

export default ProductTile;
