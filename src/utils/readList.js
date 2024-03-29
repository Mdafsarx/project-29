import { toast } from 'react-toastify';

const savedData=(Data)=>{
    const save=JSON.parse(localStorage.getItem('read'))||[]
    const exits=save.find((perData)=>perData.bookId===Data.bookId)
    if(!exits){
        save.push(Data)
        localStorage.setItem('read',JSON.stringify(save))
        toast.success('added')
    }
    else{
        toast.warning('already added')
    }
}
export {savedData}

export function getData(){
    const Data=localStorage.getItem('read')||[]
    return JSON.parse(Data)
}