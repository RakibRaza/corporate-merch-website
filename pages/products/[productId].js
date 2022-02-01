import { useRouter } from 'next/router';
import BreadcrumbTwo from '../../components/Common/Breadcrumb/BreadcrumbTwo';
import Loader from '../../components/Common/Loader/Loader';
import MightLike from '../../components/SingleProduct/MightLike/MightLike';
import ProductDetails from '../../components/SingleProduct/ProductDetails/ProductDetails';
import data from '../../public/data/products';

const SingleProduct = ({ singleProduct }) => {

  const router = useRouter()
  if (router.isFallback) {
    return <Loader />;
  }


  return (
    <>
      <BreadcrumbTwo page={singleProduct.title} />
      <ProductDetails singleProduct={singleProduct} />
      <MightLike />
    </>
  )
}

export default SingleProduct;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" }
      },
      {
        params: { productId: "2" }
      },
      {
        params: { productId: "3" }
      }
    ],
    fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const singleProduct = data.filter(item => item.id === parseFloat(params.productId));

  return {
    props: {
      singleProduct: singleProduct[0]
    }
  }
}