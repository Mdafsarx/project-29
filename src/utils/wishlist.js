import { toast } from "react-toastify"

export function getWishlist(){

    const saved=localStorage.getItem('Wishlist')
    if(saved){
        return JSON.parse(saved)
    }

    return []
}

export const savedWishList=(Data)=>{

    const saved=getWishlist()
    const exits=saved.find(save=>save.bookId===Data.bookId)
    if(exits){
        toast.error('all ready added')
    }
    else{
        saved.push(Data)
        localStorage.setItem('Wishlist',JSON.stringify(saved))
        toast.success('successfully added')
    }
}