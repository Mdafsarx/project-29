import { Outlet } from "react-router-dom";
import Navbar from "./components/Navber";

const MainLayout = () => {
    return (

        <>

            <div className="max-w-6xl mx-auto">
                <Navbar />
            </div>
            
                {/* outlet means routes children location saying */}
                <Outlet />

        </>

    );
};

export default MainLayout;