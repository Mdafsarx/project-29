import axios from "axios";
import { useEffect, useState } from "react";

const useBooks = () => {
    const [data,setData]=useState()
   useEffect(()=>{
     axios.get('/books.json').then(data=>setData(data.data))
     console.log(data)
   },[])
   return [data]
};
// useBooks()
export default useBooks;