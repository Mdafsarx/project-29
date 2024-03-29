import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from './ReadBooks/ReadBooks';
import WishList from './wishListBooks/WishList';



const ListedBooks = () => {
    return (

        <div className="max-w-6xl mx-auto space-y-20 my-20">

            <div className="flex justify-center items-center bg-gray-200 p-5 rounded-2xl">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>

            <div>
                <Tabs>

                    <TabList>
                        <Tab><h1 className='text-base font-bold'>Read Books</h1></Tab>
                        <Tab><h1 className='text-base font-bold'>Wishlist Books</h1></Tab>
                    </TabList>

                    <TabPanel>
                        <ReadBooks />
                    </TabPanel>
                    
                    <TabPanel>
                        <WishList/>
                    </TabPanel>
                </Tabs>
            </div>


        </div>

    );
};

export default ListedBooks;