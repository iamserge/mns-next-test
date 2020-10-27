import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { getProduct } from '../../api/products';
import Layout from "../../components/Layout/Layout";

const PDP = ({product}) => {
    return (
        <Layout>
            <ProductDetails product={product} />
        </Layout>
    )
}

export async function getServerSideProps({query}) {
    const { id } = query;
    const product = await getProduct(id)
    return {
        props: {
            product
        },
    }
}

export default PDP;
