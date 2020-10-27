import { useEffect, useState } from "react";
import { useAuth } from "../../providers/auth";
const ProductBadge = ({productOffers}) => {
    const defaultTopBadge = {
        badge: "",
        title: ""
    };
    const { user, isLoggedIn, incorrectUser }  = useAuth();
    const [ topBadge, setTopBadge ] = useState(defaultTopBadge) 

    useEffect(() => {
        if (Object.keys(user.userOffers).length > 0) {
            for (let i in productOffers) {
                const offerId = productOffers[i];
                if (user.userOffers[offerId]) {
                    setTopBadge(user.userOffers[offerId]);
                    break;
                }
            }
        }
    }, [user])

    if (topBadge.badge && topBadge.badge.length && isLoggedIn && !incorrectUser) {
        return (
            <div className="absolute top-0 right-0">
                <img className={`badge ${topBadge.badge}`} src={`/static/${topBadge.badge}_icon.jpg`} title={topBadge.title} alt={topBadge.title} />
            </div>
        )
    } else {
        return null;
    }
    
}

export default ProductBadge;
