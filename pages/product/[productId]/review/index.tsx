import { NextPage } from "next"
import { useRouter } from "next/router"

const Review: NextPage = () => {
    const router = useRouter()
    const {productId} = router.query

    return <h1>All Reviews Page for product {productId}</h1>
}

export default Review