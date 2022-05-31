import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Product:NextPage = () => {
    const router  = useRouter()
    const {productId = 4} = router.query
    return <>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <h2>
      <Link href='product/1'>
        <a>Product 1</a>
      </Link>
    </h2>
    <h2>
      <Link href='product/2'>
        <a>Product 2</a>
      </Link>
    </h2>
    <h2>
      <Link href='product/3' replace>
        <a>Product 3</a>
      </Link>
    </h2>
    <h2>
      <Link href={`product/${productId}`}>
        <a>Product {productId}</a>
      </Link>
    </h2>
  </>

}



export default Product