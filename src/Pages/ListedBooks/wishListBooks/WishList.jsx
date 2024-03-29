import { getWishlist } from "../../../utils/wishlist";
import CarD from "../Card";

const WishList = () => {
    const wishlist=getWishlist()
    return (
        <div className="space-y-8 mt-8">
            {
                    wishlist?.map((Wish)=><CarD key={Wish.bookId} Book={Wish}/>)
            }
        </div>
    );
};

export default WishList;