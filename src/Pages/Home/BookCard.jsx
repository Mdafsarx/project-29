/* eslint-disable react/prop-types */
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const BookCard = ({book}) => {
    const {bookName,author,image,tags,rating,category,bookId}=book || {};
    const navLink=useNavigate()
    return (
        <div className="rounded-2xl p-6 bg-white text-black border-2 border-gray-400 space-y-4" onClick={()=>navLink(`/Details/${bookId}`)}>


            <figure className="bg-[#1313130D] flex justify-center py-4 rounded-xl">
                <img src={image} alt="" className="size-40 object-contain opacity-100" />
            </figure>

            <div className="flex items-center gap-3">

                {
                    tags.map((tag, i) => <button key={i} className="btn text-[#23BE0A] btn-sm rounded-full bg-[#23BE0A0D]">{tag}</button>)
                }


            </div>

            <div className="border-b-2 border-dashed pb-3">
                <h2 className="text-xl font-semibold tracking-wide">{bookName}</h2>
                <p>By: {author}</p>
            </div>

            <div className="flex items-center justify-between">
                <h4>{category}</h4>
                <div className="flex items-center gap-1">
                    <p>{rating}</p>
                    <CiStar className="text-xl" />
                </div>
            </div>



        </div>

    );
};

export default BookCard;