import { NextPage } from "next";
import { useRouter } from "next/router";

const ReviewDetail: NextPage = () => {
    const router = useRouter()
    const {productId, reviewId} = router.query
    return <h1>Detailed Review #{reviewId} for product #{productId}</h1>
}

export default ReviewDetail