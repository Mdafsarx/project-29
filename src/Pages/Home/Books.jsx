import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const Books = () => {
    const [books,setBooks]=useState()
    useEffect(()=>{
        axios.get('/books.json').then(data=>setBooks(data.data))
    },[])
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {
                books?.map((book,i)=><BookCard key={i} book={book}/>)
            }
        </div>
    );
};

export default Books;