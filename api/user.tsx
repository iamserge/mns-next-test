import { fetchAPI } from "./index";
import { processUserBadges } from "./middleware/user";

export async function getUser(id: string) {
    const res = await fetchAPI(
        `{
            user(id: "${id}"){
                id,
                offers{
                    id,
                    type,
                    title
                },
                available_badges
            }
        }`, true
    );
    
    if (res.errors) {
        return {
            errors: res.errors
        }
    } else {
        res.user.userOffers = processUserBadges(res.user.available_badges, res.user.offers)
        return res.user;
    }
    
}
