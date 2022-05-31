import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ProductDetail: NextPage = () => {
  const router = useRouter()
  const {productId} = router.query
  return <h1>Details about product {productId}</h1>
}

export default ProductDetail