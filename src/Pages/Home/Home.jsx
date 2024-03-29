import Banner from "./Banner";
import Books from "./Books";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="space-y-28">

            <div className="space-y-20 max-w-7xl mx-auto">

                <Banner />

                <div className="space-y-5">
                    <h1 className="text-3xl font-bold text-center">Books</h1>
                    {/* books collection */}
                    <Books />
                </div>

            </div>

            <Footer />

        </div>
    );
};

export default Home;