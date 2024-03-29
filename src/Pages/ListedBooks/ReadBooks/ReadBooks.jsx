import { getData } from "../../../utils/readList";
import CarD from "../Card";

const ReadBooks = () => {
     const storedBooks=getData()
    return (
        <div>
            {

                    <div className="space-y-8 mt-10">
                        {
                                storedBooks?.map((book, i) => <CarD Book={book} key={i} />)
                            
                        }

                    </div>
            }
        </div>
    );
};

export default ReadBooks;