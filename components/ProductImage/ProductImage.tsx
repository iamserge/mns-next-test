import { useState } from "react";
import ProductBadge from "../ProductBadge/ProductBadge";
const ProductImage = ({image_key, name, offers}) => {
    const imgUrl = `https://asset1.cxnmarksandspencer.com/is/image/mands/${image_key}`;
    const [loaded, setLoaded ] = useState(false);
    return (
        <div className={"relative max-h-10 image-container" + (loaded ? " p-0" : " loading-image-container")}>
            <img loading="lazy" className="w-full min-h-full" src={imgUrl} alt={name} onLoad={()=>{setLoaded(true)}} />
            <ProductBadge productOffers={offers} />     
        </div>
    )
}

export default ProductImage;
