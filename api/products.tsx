import { fetchAPI } from "./index";

export async function getProducts() {
    const res = await fetchAPI(
        `{
          productList{
            id,
            name,
            image_key,
            price {
              current_price,
              original_price,
              currency_code
            },
            offer_ids
          }
      }`, false
    );
    return res.productList;
}

export async function getProduct(id) {
    const res = await fetchAPI(
        `{
            product(id: "${id}"){
              name,
              information {
                  section_title,
                  section_text
              },
              image_key,
              price {
                  currency_code,
                  current_price,
                  original_price,
              },
              offer_ids
            }
        }`, false
    );
    return res.product;
}
