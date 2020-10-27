import ProductImage from "../ProductImage/ProductImage";
import Price from "../Price/Price";
import { useRouter } from 'next/router'

const ProductDetails = ({product}) => {
    const {
        name,
        information,
        image_key,
        price,
        offer_ids
    } = product;
    const router = useRouter()

    return (
        <div className="md:flex mb-4">
            <div className="w-full md:w-1/2">
                <ProductImage image_key={image_key} name={name} offers={offer_ids}/>
            </div>
            <div className="w-full md:w-1/2 md:pl-10 pt-6 text-xl md:text-2xl">
                <h2 className="text-2xl md:text-4xl uppercase">{name}</h2>
                <Price price={price} />
                <div>
                    {information.title && information.title.length && (
                        <h3 className="text-2xl">{information[0]?.section_title}</h3>
                    )}
                    <p className="text-base mt-5">{information[0]?.section_text}</p>
                    <button className="bg-gray-200 hover:bg-gray-300 text-black mt-10 text-xl font-bold py-2 px-10 rounded" onClick={() => router.back()}>
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
