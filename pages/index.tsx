import ProductList from "../components/ProductsList/ProductsList";
import { getProducts } from '../api/products';
import Layout from "../components/Layout/Layout";

const PLP = ({products}) => {

    return (
        <Layout>
            <ProductList allProducts={products} />
        </Layout>
    )
}
export async function getServerSideProps() {

    const products = await getProducts()
    return {
        props: {
            products
        },
    }
}
export default PLP;
