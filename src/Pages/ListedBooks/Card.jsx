/* eslint-disable react/prop-types */
import {  Card, CardBody,  Typography } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CarD = ({Book}) => {

    const { bookName, author, image, totalPages, rating, publisher, tags, yearOfPublishing ,category,bookId } = Book || {};
    const navLink=useNavigate()

    return (

        <Card className="w-full flex-col  lg:flex-row p-5 border-2 border-gray-500">

            <figure className="flex justify-center bg-gray-200 p-5 rounded-xl">
                <img src={image} className="size-52 object-contain opacity-100" />
            </figure>

            <CardBody className="space-y-3 w-full">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {bookName}
                </Typography>

                <Typography variant="h6" color="gray" className="mb-4 ">
                    By: {author}
                </Typography>


                <div className="flex  items-center gap-4">

                    <span className="font-bold text-black">Tag</span>
                    {
                        tags?.map((tag, index) => <button className="btn btn-sm text-[#23BE0A] bg-[#23BE0A0D] rounded-full" key={index}>#{tag}</button>)
                    }

                    <p className="hidden lg:flex flex-col lg:flex-row items-center gap-1 "><span className="text-xl"><CiLocationOn></CiLocationOn></span>Year of Publishing: {yearOfPublishing}</p>
                </div>


                <div className="flex  items-center gap-4 border-b-2 pb-2 ">
                    <p className="flex items-center gap-1"><MdOutlinePeopleOutline className="text-xl" />Publisher: {publisher}</p>
                    <p className="flex items-center gap-1"><MdOutlineContactPage className="text-xl" /> Page {totalPages}</p>
                </div>

                <div className="flex  items-center gap-4">
                    <button className="btn btn-sm rounded-full text-[#328EFF] bg-[#328EFF26]">Category:{category}</button>
                    <button className="btn btn-sm rounded-full text-[#FFAC33] bg-[#FFAC3326]">Rating: {rating}</button>
                    <button className="btn btn-sm rounded-full bg-[#23BE0A] text-white"

                        onClick={() => navLink(`/Details/${bookId}`)}

                    >View Details</button>
                </div>


            </CardBody>

        </Card>

    );
};

export default CarD;