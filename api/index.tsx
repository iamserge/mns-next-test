
import {LOCAL_URL, DOCKER_URL} from '../utils/constants';

const API_URL = process.env.NODE_ENV === 'development' ? LOCAL_URL : DOCKER_URL;

export async function fetchAPI(query, local) {
    const res = await fetch(local ? LOCAL_URL : API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query
        }),
    });

    const json = await res.json();
    if (json.errors) {
        return { errors: json.errors}
    } else {
        return json.data;
    }
    
}
