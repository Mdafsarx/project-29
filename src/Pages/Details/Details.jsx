import { useParams } from "react-router-dom";
import useBooks from "../../Hooks/useBooks";
import { Button } from "@material-tailwind/react";
// import { toast } from "react-toastify";
import { savedData } from "../../utils/readList";
import { savedWishList } from "../../utils/wishlist";


const Details = () => {
    const [books]=useBooks()
    const {id}=useParams()
    const realBook=books?.find((book)=>book.bookId===id)
    const {bookName, author, image, review, totalPages, rating, tags, publisher, yearOfPublishing , category}=realBook||{}

    function handleRead(){
        savedData(realBook)
    }
    function handleWishlist(){
        savedWishList(realBook)
    }

    return (

        <div className="max-w-5xl mx-auto">
            <div className="my-20 md:grid md:grid-cols-6 gap-8">


                <div className="col-span-3 bg-[#1313130D] py-8 flex justify-center items-center  rounded-2xl">

                    <img src={image} alt="" className="w-1/2 " />

                </div>


                <div className="col-span-3  p-2 space-y-3">

                    <h1 className="text-4xl font-serif">{bookName}</h1>
                    <p className="text-lg">By: {author}</p>
                    <h3 className="text-lg border-2 py-1 border-x-0 font-medium">{category}</h3>
                    <p><span className="font-bold">Review:</span> {review}</p>


                    <div className="flex items-center gap-4 border-b-2 pt-2 pb-4">

                        <span className="font-bold">Tag</span>

                        {
                            tags?.map((tag, i) => <span key={i} className="btn btn-sm bg-[#23BE0A0D] text-[#23BE0A] rounded-full">#{tag}</span>)

                        }

                    </div>

                    <div className="flex items-center gap-16">
                        {/* th */}
                        <div className="space-y-3">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        {/* td */}
                        <div className="space-y-3">
                            <p className="font-bold">{totalPages}</p>
                            <p className="font-bold">{publisher}</p>
                            <p className="font-bold">{yearOfPublishing}</p>
                            <p className="font-bold">{rating}</p>

                        </div>

                    </div>


                    <div className="flex items-center gap-4 pt-3">
                        <Button variant="outlined" className="hover:bg-[#23BE0A] hover:text-white" onClick={() => handleRead()}>Read</Button>
                        <Button color="blue" onClick={handleWishlist}>Wishlist</Button>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Details;