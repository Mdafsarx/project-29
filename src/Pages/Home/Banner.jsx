import bgImage from '../../assets/pngwing 1 (1).png'

const Banner = () => {
    return (
        <div className='flex items-center justify-between lg:px-28 p-10 bg-gray-100 rounded-2xl '>
            
          <div>
            <h1 className="text-3xl text-balance lg:text-5xl font-bold font-serif">Books to freshen up <br /> your bookshelf</h1>
            <button className="btn bg-green-500 text-white mt-4">View The List</button>
          </div>

          <div >
            <img src={bgImage} alt="" className='w-full object-cover' />
          </div>


        </div>
    );
};

export default Banner;